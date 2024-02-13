import { NativeName } from '../interfaces'

export const getFirst = (object: NativeName = {}): string | null => {
    const key = Object.keys(object)[0]
    if(!key) return null
    return object[key].common
}