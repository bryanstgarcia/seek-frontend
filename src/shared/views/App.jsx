import React from 'react'
import './App.css'
import { Outlet } from 'react-router'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProviderComponent } from './theme.jsx'

function App() {
  return (
    <>
    <ThemeProviderComponent>
      <CssBaseline />
      <Navbar />
        { <Outlet />}
      <Footer />
    </ThemeProviderComponent>
    </>
  )
}

export default App
