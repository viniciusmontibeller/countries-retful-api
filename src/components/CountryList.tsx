import { Link } from 'react-router-dom'
import { Country } from '@/interfaces'

interface CountriesProps{
    countries: Country[] | undefined
}

export const CountryList = ({ countries }: CountriesProps) => {
    return (
        <ul className='flex flex-wrap gap-16 max-w-screen-xl justify-center mt-4 mb-7 sm:mt-0'>
            {countries && countries.map((country: Country, index) => {
                return(
                    <li key={index} className="max-w-[17rem] w-full rounded-md shadow-lg overflow-hidden h-80 bg-element text-text">
                        <Link to={`/details/${country.name.common}`}>
                            <div className='flex justify-center items-center overflow-hidden h-[45%]'>
                                <img src={country.flags.svg} alt={country.flags.alt}/>
                            </div>
                            <div className='text-sm p-6'>
                                <h3 className='mb-4 text-lg font-extrabold'>{country.name.common}</h3>
                                <div className='flex flex-col gap-1'>
                                    <p><strong>Population:</strong> {country.population.toLocaleString('pt-br')}</p>
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