import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./output.css"

import Home from "./pages/Home.tsx";
import Menu from "./pages/menu.tsx";
import AboutMe from "./pages/Aboutme.tsx";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/AboutMe",
        element: <AboutMe />
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)