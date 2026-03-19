import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'  //Realizado
import Home from './Components/Home.jsx' //Realizado
import Skills from './Components/Skills.jsx'//Realizado
import Contact from './Components/Contact.jsx' //Realizado
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Loader from './Components/Cargador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Loader />
    <Home />
    <Skills />
    <Project />

    
    <Contact />
    <Footer />

  </StrictMode>,
)
