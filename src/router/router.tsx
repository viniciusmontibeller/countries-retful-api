// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Home } from '../pages/Home'
// import { Details } from '../pages/Details'

import { RootLayout } from "@/layouts/RootLayout";
import { Details } from "@/pages/Details";
import { Home } from "@/pages/Home";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// export const Router = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/details/:name' element={<Details />}/>
//             </Routes>
//         </BrowserRouter>
//     )
// }

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path='details/:name' element={<Details />} />
        </Route>
    )
)