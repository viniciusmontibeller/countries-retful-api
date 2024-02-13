import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="flex shadow-lg justify-center">
            <div className="flex justify-between max-w-screen-xl w-full m-5">
                <Link to='/'>
                    <h1>
                        Where in the world?
                    </h1>
                </Link>
                <p>
                    Dark Mode
                </p>
            </div>
        </header>
    )
}