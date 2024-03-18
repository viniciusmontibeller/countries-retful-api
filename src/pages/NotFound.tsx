import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="text-faded space-y-7">
            <span className="tracking-widest text-8xl">404</span>
            <h2 className="text-center">Page not found!</h2>

            <p className="text-center">Go to back{' '}
                <Link className="text-text text-xl hover:border-b hover:border-input" to={'/'}>Homepage</Link>
            </p>
        </div>
    )
}