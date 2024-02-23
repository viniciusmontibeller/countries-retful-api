import { Country } from "@/interfaces"


export const getFilteredCountires = (countries: Country[], search: string, region: string): Country[] => {
    return countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()))
            .filter((country) => 
                country.region.toLowerCase().includes(region.toLowerCase()))
}