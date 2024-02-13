import { useState, useEffect } from "react"
import axios from "axios"
import { AxiosResponse } from "axios"
import { Link, useParams } from "react-router-dom"
import { Header } from "@/components/Header"
import { CountryDetails } from '../interfaces'
import { getCurrencies } from '../utils/getCurrencies'
import { getFirst } from '../utils/getFirst'

export const Details = () => {
    const [countrie, setCountries] = useState<CountryDetails | null>(null)
    const [loading, setLoading] = useState(true)
    const { name } = useParams()

    console.log(countrie)

    useEffect(() => {
        getCountrie()
    }, [])

    async function getCountrie() {
        try {
            const response: AxiosResponse = await axios.get(`https://restcountries.com/v3.1/name/${name?.toLowerCase()}`)
            setCountries(response.data[0])
            setLoading(false)
        } catch (error) {
            console.log(`${error}`)
        }
    }

    return (
        <>
            <Header />
            <main>
                <Link to='..'>
                    <button>Back</button>
                </Link>
                {loading ? (<p>Loading...</p>
                ) : (
                    <>
                        <div>
                            <img src={countrie?.flags.svg} alt={countrie?.flags.alt}/>
                            <div>
                                <h1>{countrie?.name.common}</h1>
                                <div>
                                    <div>
                                        <p>Native Name: {getFirst(countrie?.name.nativeName) || "none"}</p>
                                        {/* <p>Native Name: {Object.values(countrie?.name.nativeName?.Object.common || 'none')}</p> */}
                                        <p>Population: {countrie?.population}</p>
                                        <p>Region: {countrie?.region}</p>
                                        <p>Sub Region: {countrie?.subregion}</p>
                                        <p>Capital: {countrie?.capital}</p>
                                    </div>
                                    <div>
                                        <p>Top Level Domain: {countrie?.tld}</p>
                                        {/* <p>Currencies: {Object.values(countrie?.currencies.Object?.name || 'none').join(", ")}</p> */}
                                        <p>Currencies: {(getCurrencies(countrie?.currencies) || ['none']).join(', ')}</p>
                                        <p>Languages: {Object.values(countrie?.languages || {lang: "none"}).join(', ')}</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <span>Border Countries:</span>
                                    
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}