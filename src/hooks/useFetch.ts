import { useCallback, useEffect, useState } from "react"
import { errorHandler } from "@/utils/errorHandler"
import { client } from "./client"
import axios, { AxiosRequestConfig, AxiosResponse,  } from "axios"

export const useFetch = <T,>(url: string, config?: AxiosRequestConfig, shouldFetch = true) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = useCallback(async () => {
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
            if(axios.isCancel(error)) return
            const errorInfo = errorHandler(error)
            setError(errorInfo)
        } finally {
            setLoading(false)
        }
        controller.abort()
    }, [url, config])

    useEffect(() => {
        if (shouldFetch) {
            fetchData()
        }
    }, [shouldFetch, fetchData])

    return { data, loading, error }
}