import { ReactNode } from "react"

interface FilterSectionProps {
    children: ReactNode
}

export const FilterSection = ({children}: FilterSectionProps) => {
    return (
        <section className="flex flex-col gap-10 mb-7 sm:mb-10 sm:flex-row sm:max-w-screen-xl w-full justify-between">
            {children}
        </section>
    )
}