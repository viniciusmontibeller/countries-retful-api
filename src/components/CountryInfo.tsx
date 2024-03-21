import { Button } from "./Button"
import Arrow from '../assets/arrow-back.svg?react'
import { CountryDetails, CountryDetailsProps } from "@/interfaces"
import { useNavigate } from "react-router-dom"
import { useFetch } from "@/hooks/useFetch"
import { DetailsSkeleton } from "./DetailsSkeleton"

interface CountryInfoProps {
    country: CountryDetailsProps
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
    const { data: neighbours, loading } = useFetch<CountryDetails[]>('alpha', {
        params: {
            codes: country.borders?.join(',')
        }
    })

    const navigate = useNavigate()
    
    return (
        <div className="max-w-screen-xl w-full space-y-14">
            <Button variant="primary" className="mt-4" onClick={() => navigate(-1)}>
                <Arrow className="h-4" />
                Back
            </Button>
            
            { loading ? <DetailsSkeleton /> : (
                <section className="flex flex-col gap-16 sm:flex-row sm:gap-28 items-center">
                    <div className="basis-1/2 ">
                        <img src={country.flag.svg} alt={country.flag.alt} className="" />
                    </div>
                    <div className="basis-1/2">
                        <h2 className="font-extrabold text-2xl mb-8">{country.name}</h2>
                        <div className="flex flex-col gap-10 justify-between mb-14 sm:flex-row">
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

                        <div className="flex items-center gap-4 flex-wrap">
                            <strong>Border Countries:</strong>
                            <ul className="flex gap-3 justify-center flex-wrap">
                                {neighbours?.length ? (neighbours?.map((neighbour) => {
                                    return (
                                        <li key={neighbour.name.common}>
                                            <Button variant="secondary" className="text-sm" link={`/details/${neighbour.name.common}`}>{neighbour.name.common}</Button>
                                        </li>
                                    )
                                })) : <p>No borders found</p>}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}