import { Currencies } from "../interfaces"

export const getCurrencies = (object: Currencies = {}): string[] | null => {
    const currencies: string[] = []
    const keys = Object.keys(object)
    if(!keys.length) return null
    for (const key of keys) {
        currencies.push(object[key].name)
    }
    return currencies
}