import React, { useEffect, useRef } from "react";
import "../styles/skills.css";

const Skills = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main className="main_skills">


      <div className="skills_container">
       {/* Frontend */}
        <div ref={(el) => (sectionsRef.current[0] = el)} className="skills1">
          <div className="C_skills1">
            <div className="C_skills1_one">
              <div className="C_pic">
                <img src="/Assets/Icons/Terminal.png" alt="" />
              </div>
              <div className="C_name">
                <p>
                  Frontend <br /> Development
                </p>
              </div>
            </div>
            <div className="C_skills3_container">
              <div className="C_skills3_two">
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/html.png" alt="" />
                  </div>
                  <p>HTML</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/css-3.png" alt="" />
                  </div>
                  <p>CSS</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/js.png" alt="" />
                  </div>
                  <p>Js</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/html.png" alt="" />
                  </div>
                  <p>React</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/tail.png" alt="" />
                  </div>
                  <p>Tailwind</p>
                </div>
              </div>
              <div className="C_skills3_two">
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/boots.png" alt="" />
                  </div>
                  <p>Bootstrap</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">

                  </div>
                  <p>ThreeJs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div ref={(el) => (sectionsRef.current[1] = el)} className="skills2">
          <div className="C_skills2">
            <div className="C_skills2_one">
              <div className="C_pic">
                <img src="/Assets/Icons/Database.png" alt="" />
              </div>
              <div className="C_name">
                <p>
                  Back-end <br /> Development
                </p>
              </div>
            </div>
            <div className="C_skills3_container">
              <div className="C_skills3_two">
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/java.png" alt="" />
                  </div>
                  <p>Java</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/piton.png" alt="" />
                  </div>
                  <p>Python</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/base-de-datos-mysql.png" alt="" />
                  </div>
                  <p>Mysql</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/programacion.png" alt="" />
                  </div>
                  <p>Node</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/spring.png" alt="" />
                  </div>
                  <p>SpringBoot</p>
                </div>
              </div>
              <div className="C_skills3_two">
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/post.png" alt="" />
                  </div>
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div ref={(el) => (sectionsRef.current[2] = el)} className="skills3">
          <div className="C_skills3">
            <div className="C_skills3_one">
              <div className="C_pic">
                <img src="/Assets/Icons/Cpu.png" alt="" />
              </div>
              <div className="C_name">
                <p>
                  Tools & <br /> Technologies
                </p>
              </div>
            </div>
            <div className="C_skills3_container">
              <div className="C_skills3_two">
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/vscode.png" alt="" />
                  </div>
                  <p>Vscode</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/figma.png" alt="" />
                  </div>
                  <p>Figma</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/blender.png" alt="" />
                  </div>
                  <p>Blender</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/vite.png" alt="" />
                  </div>
                  <p>Vite</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/git.png" alt="" />
                  </div>
                  <p>Git</p>
                </div>
              </div>
              <div className="C_skills3_two">
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/docker.png" alt="" />
                  </div>
                  <p>Docker</p>
                </div>
                <div className="c_skill3_container_one">
                  <div className="m_pic">
                    <img src="../Assets/Iconskills/new/jest.png" alt="" />
                  </div>
                  <p>Jest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="skills_header">
  <h1 className="name_skills">Steven Blanco</h1>
  <h1 className="proffesion_skills">Software Developer</h1>
</div>
      <img id="img_top_skills" src="../Assets/Cave/Separete-Cav.svg" alt="" />
      <img
        className="image-background-skills"
        src="../Assets/Backgrounds/Background-Cave.svg"
        alt=""
      />



      <img id="img_down_skills" src="../Assets/Cave/Separete-Cav.svg" alt="" />
      <img id="pc" src="../Assets/Cave/Pc.svg" alt="" />
    </main>
  );
};

export default Skills;
