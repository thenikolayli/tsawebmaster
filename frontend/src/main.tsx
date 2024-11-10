import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./output.css"

import Home from "./pages/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)