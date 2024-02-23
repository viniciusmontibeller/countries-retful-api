import { Link } from "react-router-dom"
import { ToggleTheme } from "./ToggleTheme"

export const Header = () => {
    return (
        <header className="flex shadow-lg justify-center bg-dark-text-n-light-elements">
            <div className="flex justify-between items-center max-w-screen-xl w-full mx-4 my-7">
                <Link to='/'>
                    <h1 className="font-extrabold sm:text-xl">
                        Where in the world?
                    </h1>
                </Link>
                <ToggleTheme />
            </div>
        </header>
    )
}