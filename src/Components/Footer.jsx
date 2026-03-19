import React from "react"
import '../styles/footer.css'

const Footer = () => {
   return (
    <main className="main_footer">
       <div className="fourContainer">
        <div className="upContainer">
            <div className="upContainerOne">
                <p>Steven</p>
                <p>Inicio</p>
                <p>Habilidades</p>
                <p>Proyectos</p>
                <p>Sobre Mi</p>
                <p>Contacto</p>    
            </div>
            <div className="upContainerTwo">

            </div>
        </div>
        <div className="downContainer">
         <div className="downContainerOne">
                <p>2026</p>
                <p>Politicas de Privacidad</p>
                <p>Terminos de uso</p>
         </div>
         <div className="downContainerTwo">
                <p>Website hecha por Bramdon Stiven Blanco Contreras</p> 
         </div>
        </div>
       </div>
    </main>
   ) 
}

export default Footer