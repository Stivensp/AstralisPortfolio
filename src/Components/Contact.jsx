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
                            <p>Send Message</p>
                            </div>
                            <div className="childTwo">
                            <img src="..\Assets\Icons\wifi.png" alt="" />
                            <p>Online</p>
                            </div>
                        </div>
                        <div className="fistForm">
                            <div>
                                <form action="">
                                    <label htmlFor="Nombe">Name</label>
                                    <input className="inputuno" type="text" placeholder="Enter your name" name="Name" />
                                </form>
                            </div>
                            <div>
                                <form  action="">
                                    <label htmlFor="Nombe">Email</label>
                                    <input className="inputuno" type="text" placeholder="Enter your email" name="Name" />
                                </form>
                            </div>
                        </div>
                        <div className="secondForm">
                            <div className="Container_subject">
                               <form action="">
                                    <label id="Subject" htmlFor="Nombe">Subject</label>
                                    <input className="inputdos" type="text" placeholder="Project discussion" name="Name" />
                                </form>  
                            </div>
                        </div>
                        <div className="thirdForm">
                            <div className="ContainerMessage">
                               <form action="">
                                    <label id="Message" htmlFor="Nombe">Message</label>
                                    <textarea className="inputtres" type="text" placeholder="Tell me about your project..." name="Name" />
                                </form>  
                            </div>
                        </div>
                        <div className="buttomForm">
                            <button id="buttomsend">
                                <p>Send Message</p>
                                <img src="..\Assets\Icons\send.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="conect">
                    <div className="container-c">
                        <div className="titleC">
                            <p>Conect</p>
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
                            <p>Contact Information</p>                          
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
                                <p className="sb">Phone</p>
                                <p>+57 3224249116</p>                                
                            </div>                                                         
                        </div>
                        <div className="infodiv5">
                             <div className="imgi1">
                                <img src="..\Assets\Icons\location_on.png" alt="" />
                            </div>
                            <div className="encrypted">
                                <p className="sb">Location</p>
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
                                <p className="sb">Direct Line</p>
                                <p>Secure communication channel</p>
                            </div>
                        </div>

                        <div className="featuredivs4">
                            <div className="imgi">
                                <img src="..\Assets\Icons\mail-1.png" alt="" />
                            </div>                            
                            <div className="encrypted">
                                <p className="sb">Encrypted</p>
                                <p>End-to-end protection</p>                                
                            </div>                       
                        </div>

                        <div className="featuredivs5">
                            <div className="imgi">
                                <img src="..\Assets\Icons\fast_forward_filled.png" alt="" />                                
                            </div>                            
                            <div className="fast">
                                <p className="sb">Fast Response</p>
                                <p>24 hour turnaround</p>                                
                            </div>                        
                        </div>

                        <div className="featuredivs6">
                            <div className="imgi">
                                <img src="..\Assets\Icons\gmail_groups.png" alt="" />
                            </div>                            
                            <div className="global">
                                <p className="sb">Direct Line</p>
                                <p>Worldwide availability</p>
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