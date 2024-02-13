import { Link } from 'react-router-dom'
import { Country } from '../interfaces'

interface Countries{
    countries: Country[]
}

export const CountryList = ({ countries }: Countries) => {
    return (
        <ul className='flex flex-wrap gap-10 max-w-screen-xl justify-center m-5'>
            {countries && countries.map((country: Country, index) => {
                return(
                    <li key={index} className="max-w-72 w-full rounded-md shadow-lg border overflow-hidden">
                        <Link to={`/details/${country.name.common}`}>
                            <img src={country.flags.svg} alt={country.flags.alt} />
                            <div>
                                <h3>{country.name.common}</h3>
                                <p>Population: {country.population}</p>
                                <p>Região: {country.region}</p>
                                <p>Capital: {country.capital}</p>
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}