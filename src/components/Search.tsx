import MagGlass from '../assets/search-outline.svg?react'

interface SearchProps {
    search: string
    setSearch: (input: string) => void
    placeholder: string
}

export const Search = ({search, setSearch, placeholder}: SearchProps) => {
    return(
        <div className='flex gap-5 items-center text-light-inputs bg-dark-text-n-light-elements px-7 py-4 shadow-2xl rounded-lg'>
            <MagGlass className='h-5'/>
            <input 
                type='search' 
                placeholder={placeholder}
                className='bg-transparent w-full h-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}