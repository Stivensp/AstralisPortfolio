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
                            
                        </div>
                        <div className="C-up_Container">

                        </div>
                        <div className="C-up_Arrow">

                        </div>
                    </div>
                    <div className="C-down">
                        <div className="C-down_Title">
                            
                        </div>
                        <div className="C-down_Container">

                        </div>
                        <div className="C-down_Arrow">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;