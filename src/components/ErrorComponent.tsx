import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

interface ErrorComponentProps {
    error: string
}

export const ErrorComponent = ({ error }: ErrorComponentProps) => {
    const navigate = useNavigate()

    const handleRefresh = () => {
        navigate(0)
    }

    return (
        <div className="space-y-6">
            <div className="text-center space-y-6 bg-element rounded-md p-4 shadow-lg">
                <p className="text-xl">{error}</p>
                <p className="text-sm text-faded">Try reloading the page or come back later</p>
            </div>
            <Button className="mx-auto" variant="primary" onClick={handleRefresh} >Refresh</Button>
        </div>
    )
}