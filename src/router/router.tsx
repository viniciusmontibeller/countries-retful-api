// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Home } from '../pages/Home'
// import { Details } from '../pages/Details'

import { RootLayout } from "@/layouts/RootLayout";
import { Details } from "@/pages/Details";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path='details/:name' element={<Details />} />

            <Route path="*" element={<NotFound />}/>
        </Route>
    )
)