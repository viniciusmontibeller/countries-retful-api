import axios, { AxiosError } from "axios"

const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        return error.message
    } else if (error && typeof error === 'object' && 'message' in error) {
        return String(error.message)
    } else if (typeof error === 'string') {
        return error
    }
    
    return 'Something went wrong'
}

const handleAxiosError = (error: AxiosError): string => {
    if (error.response) {
        return `HTTP Error: ${error.response.status}`
    } else {
        return `Network Error: ${error.message}`
    }
}

export const errorHandler = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        return handleAxiosError(error)
    } else {
        return `Error: ${getErrorMessage(error)}`
    }
}