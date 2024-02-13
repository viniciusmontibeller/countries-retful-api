import { Header } from "../components/Header"
import { CountryList } from "../components/CountryList"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Country } from '../interfaces'

export const Home = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllCountries()
    }, [])

    async function getAllCountries() {
        try {
            const response: AxiosResponse = await axios.get("https://restcountries.com/v3.1/all")
            setCountries(response.data)
            setLoading(false)
        } catch (error) {
            console.log(`${error}`)
        }
    }

    console.log(countries)

    return (
        <>
            <Header />
            <main className="flex justify-center">
            {loading 
            ? 
                <p>"Loading..."</p>
            : 
                <CountryList countries={countries}/>
            }
            </main>
        </>
    )
}