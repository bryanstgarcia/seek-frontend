import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './shared/router.jsx'
import { RouterProvider } from "react-router";


const root = document.getElementById("root");
  
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
