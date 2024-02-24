import { ReactNode } from "react"

interface FilterSectionProps {
    children: ReactNode
}

export const FilterSection = ({children}: FilterSectionProps) => {
    return (
        <section className="flex flex-col gap-12 my-7 sm:flex-row sm:max-w-screen-xl w-full justify-between">
            {children}
        </section>
    )
}