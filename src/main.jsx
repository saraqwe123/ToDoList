import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import './global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main/>
    <Footer/>
  </StrictMode>
)
