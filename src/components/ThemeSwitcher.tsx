import { ToggleTheme } from "./ToggleTheme";
import LightMoon from '../assets/moon-outline.svg?react'
import DarkMoon from '../assets/moon.svg?react'

export const ThemeSwitcher = () => {
    return <ToggleTheme lightIcon={<LightMoon className="h-4 fill-text" />} darkIcon={<DarkMoon className="h-4 fill-text" />} />
}