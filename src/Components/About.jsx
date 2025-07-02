import React from "react";
import "../styles/about.css"

const About =() =>{
    return (
        <div className="main_about">
            <img id="img_top_about" src="..\Assets\Cave\Separete-Cav.svg" alt="" />
            <img className="image-background-about" src="..\Assets\Backgrounds\back.png" alt="" />
            <img id="img_down_about" src="..\Assets\Cave\Separete-Cav.svg" alt="" />
            <div className="Container-Co">
                <div className="aboutLeft">
                    <div className="me">
                        <p>a</p>
                    </div>
                </div>
                <div className="aboutRight">
                    <div className="C-up">
                        <div className="C-up_Title">
                            <p>Educational Journey</p>
                        </div>
                        <div className="C-up_Container">
                            <div className="Contenedor-Educational_up">
                                <div className="C_Up_Educational">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="C-up_Arrow">
                            <button id="btn_right_About">-</button>
                            <button id="btn_left_About">-</button>
                        </div>
                    </div>
                    <div className="C-down">
                        <div className="C-down_Title">
                            <p>Profesional Journey</p>
                        </div>
                        <div className="C-down_Container">
                            <div className="Contenedor-Educational_down">
                                <div className="C_educational_img">
                                    <div className="logo_empresa">
                                        <img src="../Assets/Icons/Box.png" alt="" />
                                    </div>
                                </div>
                                <div className="C_educational_title">
                                    <p>Junior Frontend Developer</p>
                                </div>
                                <div className="C_educational_apply">
                                    <p>Monster Inc</p>
                                    <p>2025</p>
                                </div>
                                <div className="C_educational_des">
                                    <p>Worked on developing and customizing WordPress websites for clients globally</p>
                                </div>
                            </div>
                        </div>
                        <div className="C-down_Arrow">
                            <button id="btn_right_About">-</button>
                            <button id="btn_left_About">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;