import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Skills from './Components/Skills.jsx'
import Home from './Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <Skills/>
    <Project />
    <About />
    <Contact />
    <Footer />
  </StrictMode>,
)
