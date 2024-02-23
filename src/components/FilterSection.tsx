import { ReactNode } from "react"

interface FilterSectionProps {
    children: ReactNode
}

export const FilterSection = ({children}: FilterSectionProps) => {
    return (
        <section className="flex flex-wrap gap-16 max-w-screen-xl justify-between mx-4 my-7">
            {children}
        </section>
    )
}