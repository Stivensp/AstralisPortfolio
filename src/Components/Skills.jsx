import React from "react"
import '../styles/skills.css'

const Skills = () => {
   return (
    <main className="main_skills">
            <div className="skills_container">
                <div className="skills1">
                        <div className="C_skills1">
                                <div className="C_skills1_one">
                                        <div className="C_pic">
                                                <img src="" alt="" />
                                        </div>
                                        <div className="C_name">
                                              <p>Frontend <br /> Development</p>  
                                        </div>
                                </div>
                                <div className="C_skills1_two">

                                </div>
                        </div>
                </div>
                <div className="skills2">
                        <div className="C_skills2">
                                <div className="C_skills2_one">
                                        <div className="C_pic">
                                                <img src="" alt="" />
                                        </div>
                                        <div className="C_name">
                                                <p>Back-end <br /> Development</p>
                                        </div>                                        
                                </div>
                                <div className="C_skills2_two">

                                </div>
                        </div>
                </div>
                <div className="skills3">
                        <div className="C_skills3">
                                <div className="C_skills3_one">
                                        <div className="C_pic">

                                        </div>
                                        <div className="C_name">
                                                <p>Tools  <br />& Technologies</p>
                                        </div>                                        
                                </div>
                                <div className="C_skills3_two">
                                        <div className="c_skill3_container_one">
                                               <p>a</p> 
                                        </div>
                                        <div className="c_skill3_container_one">
                                               <p>a</p> 
                                        </div>
                                        <div className="c_skill3_container_one">
                                               <p>a</p> 
                                        </div>
                                        <div className="c_skill3_container_one">
                                               <p>a</p> 
                                        </div>
                                        <div className="c_skill3_container_one">
                                               <p>a</p> 
                                        </div>
                                </div>
                        </div>
                </div>
            </div>
            <h1 className="name_skills">Steven Blanco</h1>
            <h1 className="proffesion_skills">Sofware Developer</h1>
            <img id="img_top_skills" src="..\Assets\Cave\Separete-Cav.svg" alt="" />
            <img className="image-background-skills" src="..\Assets\Backgrounds\Background-Cave.svg" alt="" />
            <img id="img_down_skills" src="..\Assets\Cave\Separete-Cav.svg" alt="" />
            <img id="pc" src="..\Assets\Cave\Pc.svg" alt="" />
    </main>
   ) 
}

export default Skills