import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./output.css"

import Home from "./pages/Home.tsx";
import Menu from "./pages/Menu.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Careers from "./pages/Careers.tsx";
import Locations from "./pages/Locations.tsx";
import Faq from "./pages/Faq.tsx";
import Order from "./pages/Order.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/aboutus",
        element: <AboutUs />
    },
    {
        path: "/careers",
        element: <Careers/>
    },
    {
        path: "/locations",
        element: <Locations/>
    },
    {
        path: "/Faq",
        element: <Faq/>
    },
    {
        path: "/order",
        element: <Order/>
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)