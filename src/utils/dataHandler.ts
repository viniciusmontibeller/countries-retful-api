import { getFirst } from "@/utils/getFirst"
import { getCurrencies } from "@/utils/getCurrencies"
import { CountryDetails, CountryDetailsProps } from '@/interfaces'

export const dataHandler = (country: CountryDetails | null): CountryDetailsProps => {
    const { 
        name,
        population,
        flags,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
    } = country || {}
    return {
        name: name?.common || 'Unknown',
        nativeName: getFirst(name?.nativeName) || 'Unknown',
        population: population?.toLocaleString('pt-br') || 'Unknown',
        flag: {
            svg: flags?.svg || 'Unknown',
            alt: flags?.alt || 'Unknown'
        },
        region: region || 'Unknown',
        subRegion: subregion || 'Unknown',
        capital: capital?.[0] || 'Unknown',
        domain: tld || [],
        currencies: getCurrencies(currencies) || ['Unknown'],
        languages: Object.values(languages || { lang: 'Unknown'}),
        borders: borders || []
    }
}