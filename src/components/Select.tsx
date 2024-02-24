import { useState } from 'react'
import ChevronDown from '../assets/chevron-down-outline.svg?react'

interface SelectProps {
    region: string
    setRegion: (option: string) => void
    options: string[]
    placeholder: string
}

export const Select = ({region, setRegion, options, placeholder}: SelectProps) => {
    const [ open, setOpen ] = useState(false)

    return (
        <div className='w-56 relative'>
            <button 
                className='flex w-full py-4 px-6 justify-between items-center bg-element rounded-lg shadow-xl'
                onClick={() => setOpen(!open)}
            >
                {region ? region : placeholder}
                <ChevronDown className={`h-4 ${open && 'rotate-180'}`} />
            </button>
            <ul 
                className={`bg-element rounded-lg shadow-xl overflow-hidden absolute w-full mt-1 ${ open ? 'block' : 'hidden' }`}
            >
                {options.map((region) => {
                    return (
                        <li 
                            key={region}
                            className='py-2 px-6 cursor-pointer hover:bg-emerald-500'
                            onClick={() => {
                                setRegion(region)
                                setOpen(false)
                            }}
                        >
                            {region}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}