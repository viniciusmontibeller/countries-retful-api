import { useState, useEffect } from "react"
import axios from "axios"
import { AxiosResponse } from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { Header } from "@/components/Header"
import { CountryDetails } from '../interfaces'
import { getCurrencies } from '../utils/getCurrencies'
import { getFirst } from '../utils/getFirst'
import { Button } from "@/components/Button"
import Arrow from '../assets/arrow-back.svg?react'

export const Details = () => {
    const [countrie, setCountries] = useState<CountryDetails | null>(null)
    const [loading, setLoading] = useState(true)
    const [neighbours, setNeighbours] = useState<CountryDetails[] | null>([])

    const navigate = useNavigate()

    const { name } = useParams()

    console.log(countrie)

    useEffect(() => {
        getCountrie(name!)
    }, [name])

    useEffect(() => {
        getNeighbours(countrie?.borders)
    }, [countrie?.borders])

    async function getCountrie(name: string) {
        try {
            const response: AxiosResponse = await axios.get(`https://restcountries.com/v3.1/name/${name?.toLowerCase()}`)
            setCountries(response.data[0])
            setLoading(false)
        } catch (error) {
            console.log(`${error}`)
        }
    }

    async function getNeighbours (codes: string[] | undefined) {
        if(countrie?.borders?.length) {
            try {
                const response: AxiosResponse = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes?.join(',')}`)
                setNeighbours(response.data)
            } catch (error) {
                console.log(`${error}`)
            }
        }
    }

    return (
        <>
            <Header />
            <main className="flex justify-center">
                {loading ? (<p>Loading...</p>
                ) : (
                    <div className="max-w-screen-xl m-5 w-full">
                        <Button variant="primary" onClick={() => navigate(-1)}>
                            <Arrow className="h-4"/>
                            Back
                        </Button>
                        <div className="flex flex-col gap-16 flex-wrap sm:flex-row sm:gap-28">
                            <img src={countrie?.flags.svg} alt={countrie?.flags.alt} className="max-h-80 h-full"/>
                            <div className="grow">
                                <h2 className="font-extrabold text-3xl mb-8">{countrie?.name.common}</h2>
                                <div className="flex flex-col gap-10 justify-between mb-10 sm:flex-row">
                                    <div className="flex flex-col gap-2">
                                        <p><strong>Native Name:</strong> {getFirst(countrie?.name.nativeName) || "none"}</p>
                                        <p><strong>Population:</strong> {countrie?.population}</p>
                                        <p><strong>Region:</strong> {countrie?.region}</p>
                                        <p><strong>Sub Region:</strong> {countrie?.subregion}</p>
                                        <p><strong>Capital:</strong> {countrie?.capital}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p><strong>Top Level Domain:</strong> {countrie?.tld}</p>
                                        <p><strong>Currencies:</strong> {(getCurrencies(countrie?.currencies) || ['none']).join(', ')}</p>
                                        <p><strong>Languages:</strong> {Object.values(countrie?.languages || {lang: "none"}).join(', ')}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <span>Border Countries:</span>
                                    <ul className="flex gap-6 justify-center">
                                    {neighbours?.map((neighbour) => {
                                        return (
                                            <li key={neighbour.name.common}>
                                                <Button variant="secondary" link={`/details/${neighbour.name.common}`}>{neighbour.name.common}</Button>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}