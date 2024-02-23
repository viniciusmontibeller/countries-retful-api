import { Link } from 'react-router-dom'
import { Country } from '../interfaces'

interface CountriesProps{
    countries: Country[]
}

export const CountryList = ({ countries }: CountriesProps) => {
    return (
        <ul className='flex flex-wrap gap-16 max-w-screen-xl justify-center mx-4 my-7'>
            {countries && countries.map((country: Country, index) => {
                return(
                    <li key={index} className="max-w-[17rem] w-full rounded-md shadow-lg border overflow-hidden h-80 bg-dark-text-n-light-elements">
                        <Link to={`/details/${country.name.common}`}>
                            <div className='flex justify-center items-center overflow-hidden h-1/2'>
                                <img src={country.flags.svg} alt={country.flags.alt} className='w-full'/>
                            </div>
                            <div className='text-sm p-6'>
                                <h3 className='mb-4 text-base font-extrabold'>{country.name.common}</h3>
                                <div className='flex flex-col gap-0.5'>
                                    <p><strong>Population:</strong> {country.population}</p>
                                    <p><strong>Região:</strong> {country.region}</p>
                                    <p><strong>Capital:</strong> {country.capital}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}