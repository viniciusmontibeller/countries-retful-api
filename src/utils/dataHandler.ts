import { getFirst } from "@/utils/getFirst"
import { getCurrencies } from "@/utils/getCurrencies"
import { CountryDetails, CountryDetailsProps } from '@/interfaces'

export const dataHandler = (country: CountryDetails, neighbours: CountryDetails[]): CountryDetailsProps => {

    return {
        name: country?.name.common || 'Unknown',
        nativeName: getFirst(country?.name.nativeName) || 'Unknown',
        population: country?.population.toLocaleString('pt-br') || 'Unknown',
        flag: {
            svg: country?.flags.svg || 'Unknown',
            alt: country?.flags.alt || 'Unknown'
        },
        region: country?.region || 'Unknown',
        subRegion: country?.subregion || 'Unknown',
        capital: country?.capital[0] || 'Unknown',
        domain: country?.tld,
        currencies: getCurrencies(country?.currencies) || ['Unknown'],
        languages: Object.values(country?.languages || { lang: 'Unknown' }),
        borders: neighbours.map((neighbour) => neighbour.name.common)
    }
}