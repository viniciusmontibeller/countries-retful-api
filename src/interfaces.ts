export interface NativeName {
    [key: string]: {
        common: string
    }
}

export interface Currencies {
    [key: string]: {
        name: string
    }
}

export interface Country {
    name: {
        common: string
        nativeName?: NativeName
    }
    population: number
    region: string
    capital: string[]
    flags: {
        alt: string
        svg: string
    }
}

export interface CountryDetails extends Country {
    subregion: string
    tld: string[]
    currencies: {
        [key: string]: {
            name: string
        }
    }
    languages: {
        [key:string]: string
    }
    borders: string[]
}