import { useParams, useNavigate } from "react-router-dom"
import { CountryDetails } from '../interfaces'
import { CountryInfo } from "@/components/CountryInfo"
import { useFetch } from "@/hooks/useFetch"
import { ErrorComponent } from "@/components/common/ErrorComponent"
import { Button } from "@/components/common/Button"
import Arrow from '@/assets/arrow-back.svg?react'
import { DetailsSkeleton } from "@/components/loaders/DetailsSkeleton"

export const Details = () => {
    const { name } = useParams()

    const navigate = useNavigate()

    const { data, loading, error } = useFetch<CountryDetails[]>(`name/${name?.toLowerCase()}`)
    const [country] = data ?? []

    if (error) {
        return <ErrorComponent error={error} />
    }

    return (
        <div className="max-w-screen-xl w-full space-y-14">
            <Button variant="primary" className="mt-4" onClick={() => navigate(-1)}>
                <Arrow className="h-4" />
                Back
            </Button>
            {loading && <DetailsSkeleton />}
            {!loading && <CountryInfo country={country} />}
        </div>
    )
}