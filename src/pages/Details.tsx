import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CountryDetails } from '../interfaces'
import { countriesApi } from "@/services/countriesApi"
import { CountryInfo } from "@/components/CountryInfo"
import { dataHandler } from "@/utils/dataHandler"

export const Details = () => {
    const [country, setCountry] = useState<CountryDetails | null>(null)
    const [loading, setLoading] = useState(true)
    const [neighbours, setNeighbours] = useState<CountryDetails[]>([])

    const { name } = useParams()

    useEffect(() => {
        (async () => {
            if (name){
                try {
                    const data = await countriesApi.getCountryDetails(name)
                    setCountry(data[0])
                    setLoading(false)
                } catch (error) {
                    console.log(`${error}`)
                }
            }
        })();
    }, [name])

    useEffect(() => {
        (async () => {
            if (country?.borders.length) {
                try{
                    const data = await countriesApi.getCountryNeighbours(country?.borders)
                    setNeighbours(data)
                } catch (error) {
                    console.log(`${error}`)
                }
            }
        })()
    }, [country?.borders])

    return (
        <>
            {loading ? (<p>Loading...</p>
            ) : (
                country && <CountryInfo country={dataHandler(country)} neighbours={neighbours} />
            )}
        </>
    )
}