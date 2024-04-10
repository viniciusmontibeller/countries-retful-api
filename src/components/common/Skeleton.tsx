import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    count: number
}

export const Skeleton = ({ count, className, ...props }: SkeletonProps) => {
    return (
        <>
            {
            [...Array(count)].map((_, index) => (
                <div
                key={index}
                className={cn('motion-safe:animate-pulse bg-slate-600 rounded-lg w-full', className)}
                {...props}
            />
            ))}
        </>
    )
}