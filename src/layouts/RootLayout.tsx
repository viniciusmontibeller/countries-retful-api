import { Header } from "@/components/Header"
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
        <>
            <Header />

            <main className="flex flex-col items-center mx-4">
                <Outlet />
            </main>
        </>
    )
}