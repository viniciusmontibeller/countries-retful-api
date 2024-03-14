import { ReactNode, createContext, useEffect, useState } from "react";

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme ) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => { }
})

interface ThemeProviderProps {
    children: ReactNode
}

const getInitialTheme = (): Theme => {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const storageValue = localStorage.getItem('savedTheme') as Theme
    return storageValue || preferredTheme
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme())

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('savedTheme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} > 
            {children}
        </ThemeContext.Provider>
    )
}