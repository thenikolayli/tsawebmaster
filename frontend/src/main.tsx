import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./output.css"

import Home from "./pages/Home.tsx";
import menu from "./pages/menu.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
