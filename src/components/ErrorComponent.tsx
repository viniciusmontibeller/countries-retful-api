interface ErrorComponentProps {
    error: string
}

export const ErrorComponent = ({ error }: ErrorComponentProps) => {
    return (
        <div>
            <h1>Error ❌</h1>
            <p>{error}</p>
        </div>
    )
}