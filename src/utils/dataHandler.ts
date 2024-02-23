import { getFirst } from "@/utils/getFirst"
import { getCurrencies } from "@/utils/getCurrencies"
import { CountryDetails, CountryDetailsProps } from '@/interfaces'

export const dataHandler = (country: CountryDetails): CountryDetailsProps => {
    return {
        name: country.name.common,
        nativeName: getFirst(country.name.nativeName) || 'none',
        population: country.population,
        flag: {
            svg: country.flags.svg,
            alt: country.flags.alt
        },
        region: country.region,
        subRegion: country.subregion || 'none',
        capital: country.capital?.[0] || 'none',
        domain: country.tld,
        currencies: getCurrencies(country.currencies) || ['none'],
        languages: Object.values(country.languages || { lang: 'none'}),
        borders: country.borders || []
    }
}