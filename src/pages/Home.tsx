import { Header } from "../components/Header"
import { CountryList } from "../components/CountryList"
import axios, { AxiosResponse } from "axios"
import { useEffect, useMemo, useState } from "react"
import { Country } from '../interfaces'
import { FilterSection } from "@/components/FilterSection"
import { Search } from "@/components/Search"
import { Select } from "@/components/Select"

const regions = ['Africa', 'America', 'Asia', 'Europa', 'Oceania']

const getFilteredCountires = (countries: Country[], search: string, region: string): Country[] => {
    return countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()))
            .filter((country) => 
                country.region.toLowerCase().includes(region.toLowerCase()))
}

export const Home = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    const filteredCountries = useMemo(() => getFilteredCountires(countries, search, region), [countries, search, region])

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

    return (
        <>
            <Header />
            <main className="">
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
            </main>
        </>
    )
}