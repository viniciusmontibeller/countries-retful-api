import { CountryList } from "../components/CountryList"
import { countriesApi } from '../services/countriesApi'
import { getFilteredCountires } from '../utils/getFilteredCountries'
import { useEffect, useMemo, useState } from "react"
import { Country } from '../interfaces'
import { FilterSection } from "@/components/FilterSection"
import { Search } from "@/components/Search"
import { Select } from "@/components/Select"
import { errorHandler } from "@/utils/errorHandler"
import { ErrorComponent } from "@/components/ErrorComponent"

const regions = ['Africa', 'America', 'Asia', 'Europa', 'Oceania']

export const Home = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    const filteredCountries = useMemo(() => getFilteredCountires(countries, search, region), [countries, search, region])

    useEffect(() => {
        (async () => {
            try {
                const data = await countriesApi.getAll()
                setCountries(data)
                setLoading(false)
                setError(null)
            } catch (error) {
                const errorInfo = errorHandler(error)
                setError(errorInfo)
                setLoading(false)
             }
        })();
    }, [])

    if (error) {
        return <ErrorComponent error={error} />
    }

    return (
        <>
            <FilterSection >
                <Search search={search} setSearch={setSearch} placeholder="Search for country..." />
                <Select options={regions} placeholder='Filter by Region' region={region} setRegion={setRegion} />
            </FilterSection>
            {loading
                ?
                <p>"Loading..."</p>
                :
                <CountryList countries={filteredCountries} />
            }
        </>
    )
}