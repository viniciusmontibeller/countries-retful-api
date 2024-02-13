import axios from "axios"

export async function getAllCountries() {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        const countries = response.data
        return countries
    } catch (error) {
        console.log(`${error}`)
    }
}