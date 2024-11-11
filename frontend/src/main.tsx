import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./output.css"

import Home from "./pages/Home.tsx";
import Menu from "./pages/Menu.tsx";
import AboutUs from "./pages/AboutUs.tsx";

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
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)