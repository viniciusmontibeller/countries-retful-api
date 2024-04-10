import { cn } from "@/lib/utils"
import { Skeleton } from "../common/Skeleton"


export const DetailsSkeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("flex flex-col gap-16 sm:flex-row sm:gap-28 items-center max-w-screen-xl w-full", className)} {...props}>
            <div className="basis-1/2">
                <Skeleton count={1} className="h-80" />
            </div>
            <div className="basis-1/2 w-full">
                <Skeleton count={1} className="h-6 max-w-56 mb-8" />
                <div className="flex flex-col gap-10 justify-between mb-14 sm:flex-row">
                    <div className="space-y-4 basis-1/2">
                        <Skeleton count={5} className="h-4 max-w-80" />
                    </div>
                    <div className="space-y-4 basis-1/2">
                        <Skeleton count={3} className="h-4 max-w-80" />
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                    <Skeleton count={1} className="h-6 max-w-40" />
                    <div className="flex gap-3 justify-center flex-wrap mx-auto">
                        <Skeleton count={3} className="h-7 w-28" />
                    </div>
                </div>
            </div>
        </div>
    )
}