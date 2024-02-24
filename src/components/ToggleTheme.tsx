import { Button } from "./Button"
import { useContext, useEffect } from "react"
import { ThemeContext } from "@/context/themeContext"
import LightMoon from '../assets/moon-outline.svg?react'
import DarkMoon from '../assets/moon.svg?react'

export const ToggleTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    function switchTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <Button variant='default' className="font-semibold text-sm capitalize" onClick={switchTheme}>
            {theme === 'light' ? <LightMoon className="h-4 fill-text"/> : <DarkMoon className="h-4 fill-text"/>}
            {theme === 'light' ? 'dark' : 'light'} Mode
        </Button>
    )
}