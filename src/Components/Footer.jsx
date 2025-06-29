import React from "react"
import '../styles/footer.css'

const Footer = () => {
   return (
    <main className="main_footer">
       <div className="fourContainer">
        <div className="upContainer">
            <div className="upContainerOne">
                <p>Steven</p>
                <p>Home</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>    
            </div>
            <div className="upContainerTwo">

            </div>
        </div>
        <div className="downContainer">
         <div className="downContainerOne">
                <p>2025</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
         </div>
         <div className="downContainerTwo">
                <p>Website by Steven Blanco</p> 
         </div>
        </div>
       </div>
    </main>
   ) 
}

export default Footer