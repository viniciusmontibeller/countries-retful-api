import { Button } from "./Button"
import { useContext } from "react"
import { Theme, ThemeContext } from "@/context/themeContext"

interface ToggleThemeProps {
    lightIcon: React.ReactNode
    darkIcon: React.ReactNode
}

export const ToggleTheme = ({ lightIcon, darkIcon }: ToggleThemeProps) => {
    const { theme, setTheme } = useContext(ThemeContext)

    function switchTheme() {
        const nexTheme: Theme = theme === 'light' ? 'dark' : 'light'
        setTheme(nexTheme)
    }

    return (
        <Button variant='default' className="font-semibold text-sm capitalize" onClick={switchTheme}>
            {theme === 'light' ? lightIcon : darkIcon} {theme === 'light' ? 'dark' : 'light'} Mode
        </Button>
    )
}