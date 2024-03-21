import { cn } from "@/lib/utils"
import { Skeleton } from "./Skeleton"


export const DetailsSkeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("flex flex-col gap-16 sm:flex-row sm:gap-28 items-center max-w-screen-xl w-full", className)} {...props}>
            <div className="basis-1/2">
                <Skeleton count={1} className="h-80 w-full" />
            </div>
            <div className="basis-1/2 w-full">
                <Skeleton count={1} className="h-8 w-56 mb-8" />
                <div className="flex flex-col gap-10 justify-between mb-14 sm:flex-row">
                    <div className="space-y-4 basis-1/2">
                        <Skeleton count={5} className="h-6 max-w-64 w-full" />
                    </div>
                    <div className="space-y-4 basis-1/2">
                        <Skeleton count={3} className="h-6 max-w-64 w-full" />
                    </div>
                </div>

                <div className="flex gap-4 flex-wrap items-center">
                    <Skeleton count={1} className="h-6 w-48" />
                    <div className="flex items-center gap-3">
                        <Skeleton count={3} className="h-8 w-24" />
                    </div>
                </div>
            </div>
        </div>
    )
}