import { cn } from "@/lib/utils"
import { Skeleton } from "./Skeleton"


export const HomeSkeleton = ({ className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn('flex flex-wrap gap-16 max-w-screen-xl w-full justify-center mt-4 mb-7 sm:mt-0', className)} {...props}>
            <Skeleton count={12} className="h-80 max-w-[17rem] w-full"/>
        </div>
    )
}