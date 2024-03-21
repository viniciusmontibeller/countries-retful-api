import { CountryList } from "../components/CountryList"
import { getFilteredCountires } from '../utils/getFilteredCountries'
import { useMemo, useState } from "react"
import { Country } from '../interfaces'
import { FilterSection } from "@/components/FilterSection"
import { Search } from "@/components/Search"
import { Select } from "@/components/Select"
import { ErrorComponent } from "@/components/ErrorComponent"
import { useFetch } from "@/hooks/useFetch"
import { HomeSkeleton } from "@/components/HomeSkeleton"

const regions = ['Africa', 'America', 'Asia', 'Europa', 'Oceania']

export const Home = () => {
    const { data: countries, loading, error } = useFetch<Country[]>('all')

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    const filteredCountries = useMemo(() => getFilteredCountires(countries, search, region), [countries, search, region])

    if (error) {
        return <ErrorComponent error={error} />
    }

    return (
        <>
            <FilterSection >
                <Search search={search} setSearch={setSearch} placeholder="Search for country..." />
                <Select options={regions} placeholder='Filter by Region' region={region} setRegion={setRegion} />
            </FilterSection>
            { loading
                ?
                <HomeSkeleton />
                :
                <CountryList countries={filteredCountries} />
            }
        </>
    )
}