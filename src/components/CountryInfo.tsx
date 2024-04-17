import { useMemo } from "react"

import { Button } from "./common/Button"
import { CountryDetails } from "@/interfaces"
import { useFetch } from "@/hooks/useFetch"
import { dataHandler } from "@/utils/dataHandler"

interface CountryInfoProps {
    country: CountryDetails
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
    const hasBorders = Boolean(country.borders && country.borders.length > 0)

    // const {data: borders, loading} = useFetch<CountryDetails[]>(`alpha?codes=${country?.borders?.join(',')}`)
    const { data: borders, loading } = useFetch<CountryDetails[]>('alpha', {
        params: {
            codes: country.borders?.join(',')
        }
    }, hasBorders)

    const countryData = useMemo(() => dataHandler(country, borders), [country, borders])
    
    return (
        <section className="flex flex-col gap-16 sm:flex-row sm:gap-28 items-center">
            <div className="basis-1/2 ">
                <img src={countryData.flag.svg} alt={countryData.flag.alt} className="" />
            </div>
            <div className="basis-1/2">
                <h2 className="font-extrabold text-2xl mb-8">{countryData.name}</h2>
                <div className="flex flex-col gap-10 justify-between mb-14 sm:flex-row">
                    <div className="flex flex-col gap-2">
                        <p><strong>Native Name:</strong> {countryData.nativeName}</p>
                        <p><strong>Population:</strong> {countryData.population}</p>
                        <p><strong>Region:</strong> {countryData.region}</p>
                        <p><strong>Sub Region:</strong> {countryData.subRegion}</p>
                        <p><strong>Capital:</strong> {countryData.capital}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p><strong>Top Level Domain:</strong> {countryData.domain}</p>
                        <p><strong>Currencies:</strong> {countryData.currencies.join(', ')}</p>
                        <p><strong>Languages:</strong> {countryData.languages.join(', ')}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                    <strong>Border Countries:</strong>
                    {!hasBorders && (
                        <p>No borders found</p>
                    )}
                    {hasBorders && loading && <div>loading</div>}
                    {hasBorders && !loading && (
                        <ul className="flex gap-3 justify-center flex-wrap">
                        {(countryData.borders.map((neighbour) => {
                            return (
                                <li key={neighbour}>
                                    <Button variant="secondary" className="text-sm" link={`/details/${neighbour}`}>{neighbour}</Button>
                                </li>
                            )
                        }))}
                    </ul>
                    )}
                </div>
            </div>
        </section>
    )
}
CountryInfo.whyDidYouRender = false