// import { Country } from "@/interfaces"
import { useState, useEffect } from "react"
import { errorHandler } from "@/utils/errorHandler"
import { client } from "./client" 
import { AxiosRequestConfig } from "axios"

export const useFetch = <T,>(url: string, config?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await client.get<T>(url, config)
                const data = response.data
                setData(data)
                setError(null)
            } catch (error) {
                const errorInfo = errorHandler(error)
                setError(errorInfo)
            } finally {
                setLoading(false)
            }
        })();
    }, [url, config])

    return { data, loading, error }
}