import { Country } from "@/interfaces"


export const getFilteredCountires = (countries: Country[] | null, search: string, region: string): Country[] | undefined => {
    return countries?.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()))
            .filter((country) => 
                country.region.toLowerCase().includes(region.toLowerCase()))
}