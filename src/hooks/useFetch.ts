import { useState } from "react"
import { errorHandler } from "@/utils/errorHandler"
// import { useOnLoad } from "./useOnLoad"
import { client } from "./client"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { useOnLoad } from "./useOnLoad"

export const useFetch = <T,>(url: string, config?: AxiosRequestConfig, shouldFetch = true) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useOnLoad(() => {
        const fetchData = async () => {
            const controller = new AbortController()
                try {
                    const response: AxiosResponse<T> = await client.get(url, {
                        ...config,
                        signal: controller.signal
                    })
                    const newData = response.data
                    setData(newData)
                    setError(null)
                } catch (error) {
                    if(axios.isCancel(error)) console.log(error)
                    const errorInfo = errorHandler(error)
                    setError(errorInfo)
                } finally {
                    setLoading(false)
                }
                controller.abort()
        }
        if (shouldFetch) {
            fetchData()
        }
        // return () => controller.abort()
    }, [url, config, shouldFetch])

    // async function fetchData() {
    //     const controller = new AbortController()

    //     try {
    //         const response: AxiosResponse<T> = await client.get(url, {
    //             ...config,
    //             signal: controller.signal
    //         })
    //         const data = response.data
    //         setData(data)
    //         setError(null)
    //     } catch (error) {
    //         const errorInfo = errorHandler(error)
    //         setError(errorInfo)
    //     } finally {
    //         setLoading(false)
    //     }

    //     controller.abort()
    // }

    return { data, loading, error }
}