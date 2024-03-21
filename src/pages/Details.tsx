// import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CountryDetails } from '../interfaces'
// import { countriesApi } from "@/services/countriesApi"
import { CountryInfo } from "@/components/CountryInfo"
import { dataHandler } from "@/utils/dataHandler"
import { useFetch } from "@/hooks/useFetch"
import { ErrorComponent } from "@/components/ErrorComponent"

export const Details = () => {
    const { name } = useParams()

    const { data, loading, error } = useFetch<CountryDetails[]>(`name/${name?.toLowerCase()}`)
    const [country] = data ?? []

    if (error) {
        return <ErrorComponent error={error} />
    }

    return (
        <>
            { loading ? ( <p>Loading...</p>
            ) : (
               <CountryInfo country={dataHandler(country)} />
            )}
        </>
    )
}