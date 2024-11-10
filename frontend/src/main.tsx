import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./output.css"

import Home from "./pages/Home.tsx";
import Menu from './pages/menu.tsx';
import Me from "./pages/about me.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/menu",
        element: <Menu/>, 
    },
    {
      path: "/aboutme",
      element: <Me/>
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)