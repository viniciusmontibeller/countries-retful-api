import { useState } from 'react'
import ChevronDown from '@/assets/chevron-down-outline.svg?react'

interface SelectProps {
    option: string
    setOption: (option: string) => void
    options: string[]
    placeholder: string
}

export const Select = ( {option, setOption, options, placeholder}: SelectProps) => {
    const [ open, setOpen ] = useState(false)

    return (
        <div className='w-56 relative'>
            <button 
                className='flex w-full py-4 px-6 justify-between text-sm items-center bg-element rounded-lg shadow-xl'
                onClick={() => setOpen(!open)}
            >
                {option ? option : placeholder}
                <ChevronDown className={`h-4 ${open && 'rotate-180'}`} />
            </button>
            <ul 
                className={`bg-element rounded-lg shadow-xl overflow-hidden absolute w-full mt-1 ${ open ? 'block' : 'hidden' }`}
            >
                {options.map((option) => {
                    return (
                        <li 
                            key={option}
                            className='py-2 px-6 cursor-pointer text-sm hover:bg-emerald-500'
                            onClick={() => {
                                setOption(option)
                                setOpen(false)
                            }}
                        >
                            {option}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}