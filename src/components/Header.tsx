import { Link } from "react-router-dom"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const Header = () => {
    return (
        <header className="flex justify-center shadow-lg bg-element">
            <div className="flex justify-between items-center max-w-screen-xl w-full my-7 mx-4">
                <Link to='/'>
                    <h1 className="font-extrabold sm:text-xl">
                        Where in the world?
                    </h1>
                </Link>
                <ThemeSwitcher />
            </div>
        </header>
    )
}