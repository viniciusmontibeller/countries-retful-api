import axios, { AxiosResponse } from "axios"

const baseUrl = 'https://restcountries.com/v3.1/'

export const countriesApi = {
    async getAll () {
        const response: AxiosResponse = await axios.get(`${baseUrl}all`)
        return response.data
    },

    async getCountryDetails (name: string) {
        const response: AxiosResponse = await axios.get(`${baseUrl}name/${name?.toLowerCase()}`)
        return response.data
    },

    async getCountryNeighbours (codes: string[]) {
        const response: AxiosResponse = await axios.get(`${baseUrl}alpha?codes=${codes?.join(',')}`)
        return response.data
    }
}