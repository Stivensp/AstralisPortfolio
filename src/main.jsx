import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'
import Contact from './Components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contact />
    <Footer />
  </StrictMode>,
)
