import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'default' | 'primary' | 'secondary'
    children: ReactNode
    link?: string
}

export const Button = ({ variant, link, children, className, ...props }: ButtonProps) => {
    return (
        <>
            {link ? (
                <Link to={link} className="block w-fit">
                    <button className={cn(`flex gap-2 items-center ${variant}`, className)} {...props}>
                        {children}
                    </button>
                </Link>
            ) : (
                <button className={cn(`flex gap-2 items-center ${variant}`, className)} {...props}>
                    {children}
                </button>
            )}
        </>
    )
}