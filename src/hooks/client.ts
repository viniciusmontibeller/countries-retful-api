import axios from 'axios'

const API_URL = 'https://restcountries.com/v3.1/'

export const client = axios.create({
    baseURL: API_URL
})