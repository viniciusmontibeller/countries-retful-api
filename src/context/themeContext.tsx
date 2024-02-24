import { ReactNode, createContext, useState } from "react";

export interface ThemeContext {
    theme: 'light' | 'dark'
    setTheme: (theme: 'light' | 'dark' ) => void
}

export const ThemeContext = createContext<ThemeContext>({
    theme: 'light',
    setTheme: () => { }
})

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} > 
            {children}
        </ThemeContext.Provider>
    )
}