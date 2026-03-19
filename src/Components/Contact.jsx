import React from "react"
import '../styles/contact.css'

const Contact = () =>{
    return (
    <main className="main_contact">
        <h1 className="Title-Contact">CONTACT ME</h1>
        <div className="image">
            <img className="image-self" src="..\Assets\Backgrounds\Background-Cave.svg" alt="" />
        </div>



         <div className="ContainerForm">
            <div className="leftSide">

                <div className="realForm">
                    <div className="formContainer">
                        <div className="title_form_C">
                            <div className="childOne">
                            <img src="..\Assets\Icons\chat_bubble.png" alt="" />
                            <p>Enviar Mensaje</p>
                            </div>
                            <div className="childTwo">
                            <img src="..\Assets\Icons\wifi.png" alt="" />
                            <p>Online</p>
                            </div>
                        </div>
                        <div className="fistForm">
                            <div>
                                <form action="">
                                    <label htmlFor="Nombe">Nombre</label>
                                    <input className="inputuno" type="text" placeholder="Ingresa tu nombre" name="Name" />
                                </form>
                            </div>
                            <div>
                                <form  action="">
                                    <label htmlFor="Nombe">Email</label>
                                    <input className="inputuno" type="text" placeholder="Ingresa tu email" name="Name" />
                                </form>
                            </div>
                        </div>
                        <div className="secondForm">
                            <div className="Container_subject">
                               <form action="">
                                    <label id="Subject" htmlFor="Nombe">Tema</label>
                                    <input className="inputdos" type="text" placeholder="Idea de proyecto" name="Name" />
                                </form>  
                            </div>
                        </div>
                        <div className="thirdForm">
                            <div className="ContainerMessage">
                               <form action="">
                                    <label id="Message" htmlFor="Nombe">Mensaje</label>
                                    <textarea className="inputtres" type="text" placeholder="Dime sobre tu proyecto..." name="Name" />
                                </form>  
                            </div>
                        </div>
                        <div className="buttomForm">
                            <button id="buttomsend">
                                <p>Enviar Mensaje</p>
                                <img src="..\Assets\Icons\send.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="conect">
                    <div className="container-c">
                        <div className="titleC">
                            <p>Conecta</p>
                        </div>
                        <div className="logoC">
                           <div className="logo1">
                            <img src="..\Assets\Icons\Github.png" alt="" />
                           </div>
                           <div className="logo2">
                            <img src="..\Assets\Icons\Instagram.png" alt="" />
                           </div>
                           <div className="logo3">
                            <img src="..\Assets\Icons\Linkedin.png" alt="" />
                           </div>
                        </div>
                    </div>
                </div>        
            </div>
            <div className="rightSide">
                <div className="Info">
                    <div className="infodiv1">
                        <div className="infodiv2">
                            <p>Informacion Contacto</p>                          
                        </div>
                        <div className="infodiv3">
                            <div className="imgi1">
                                <img src="..\Assets\Icons\mail-1.png" alt="" />
                            </div>
                            <div className="encrypted">
                                <p className="sb">Email</p>
                                <p>delleore1@gmail.com</p>                                
                            </div>                                                         
                        </div>
                        <div className="infodiv4">
                            <div className="imgi1">
                                <img src="..\Assets\Icons\call_end.png" alt="" />
                            </div>
                            <div className="encrypted">
                                <p className="sb">Celular</p>
                                <p>+57 3224249116</p>                                
                            </div>                                                         
                        </div>
                        <div className="infodiv5">
                             <div className="imgi1">
                                <img src="..\Assets\Icons\location_on.png" alt="" />
                            </div>
                            <div className="encrypted">
                                <p className="sb">Localidad</p>
                                <p>Bucaramanga,Colombia</p>                                
                            </div>                                                        
                        </div>
                        <div className="infodiv6">
                            <div className="imgi1">
                                <img src="..\Assets\Icons\chat_bubble-1.png" alt="" />
                            </div>
                            <div className="encrypted">
                                <p className="sb">Whatsapp</p>
                                <p>+57 3224249116</p>                                
                            </div>                                                         
                        </div>                        
                    </div>
                </div>
                <div className="Features">
                    <div className="featuredivs1">
                        <div className="featuredivs2">
                            <p>Features</p>
                        </div>

                        <div className="featuredivs3">
                            <div className="imgi">
                                <img src="..\Assets\Icons\swap_horiz.png" alt="" />
                            </div>
                            <div className="directline">
                                <p className="sb">Linea Directa</p>
                                <p>Canal de comunicación seguro</p>
                            </div>
                        </div>

                        <div className="featuredivs4">
                            <div className="imgi">
                                <img src="..\Assets\Icons\mail-1.png" alt="" />
                            </div>                            
                            <div className="encrypted">
                                <p className="sb">Encriptado</p>
                                <p>Protección de extremo a extremo</p>                                
                            </div>                       
                        </div>

                        <div className="featuredivs5">
                            <div className="imgi">
                                <img src="..\Assets\Icons\fast_forward_filled.png" alt="" />                                
                            </div>                            
                            <div className="fast">
                                <p className="sb">Respuesta Rápida</p>
                                <p>24 horas de plazo</p>                                
                            </div>                        
                        </div>

                        <div className="featuredivs6">
                            <div className="imgi">
                                <img src="..\Assets\Icons\gmail_groups.png" alt="" />
                            </div>                            
                            <div className="global">
                                <p className="sb">Linea Directa</p>
                                <p>Disponibilidad mundial</p>
                            </div>                       
                        </div>    
                    </div>
                </div>           
            </div>
        </div>










    <img className="Cave-division-down-contact" src="..\Assets\Cave\Caves Diffe.png" alt="" />
    <img className="Cave-rocks-down-contact" src="..\Assets\Cave\Separete-Cav.svg" alt="" />
    <img className="Cave-rocks-top-contact" src="..\Assets\Cave\Separete-Cav.svg" alt="" />
    </main>
    )
}

export default Contact