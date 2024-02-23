import { Button } from "./Button"
import Arrow from '../assets/arrow-back.svg?react'
import { CountryDetails, CountryDetailsProps } from "@/interfaces"
import { useNavigate } from "react-router-dom"

interface CountryInfoProps {
    country: CountryDetailsProps
    neighbours: CountryDetails[]
}

export const CountryInfo = ({ country, neighbours }: CountryInfoProps) => {
    const navigate = useNavigate()

    return (
        <div className="max-w-screen-xl m-5 w-full">
            <Button variant="primary" onClick={() => navigate(-1)}>
                <Arrow className="h-4"/>
                Back
            </Button>
            <div className="flex flex-col gap-16 flex-wrap sm:flex-row sm:gap-28">
                <img src={country.flag.svg} alt={country.flag.alt} className="max-h-80 h-full"/>
                <div className="grow">
                    <h2 className="font-extrabold text-3xl mb-8">{country.name}</h2>
                    <div className="flex flex-col gap-10 justify-between mb-10 sm:flex-row">
                        <div className="flex flex-col gap-2">
                            <p><strong>Native Name:</strong> {country.nativeName}</p>
                            <p><strong>Population:</strong> {country.population}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Sub Region:</strong> {country.subRegion}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p><strong>Top Level Domain:</strong> {country.domain}</p>
                            <p><strong>Currencies:</strong> {country.currencies.join(', ')}</p>
                            <p><strong>Languages:</strong> {country.languages.join(', ')}</p>
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
    )
}