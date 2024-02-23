import { Button } from "./Button"
import LightMoon from '../assets/moon-outline.svg?react'
// import MoonDark from '../assets/moon.svg?react'

export const ToggleTheme = () => {
    return (
        <Button variant='default' className="font-semibold text-sm">
            <LightMoon className="h-4"/>
            Dark Mode
        </Button>
    )
}