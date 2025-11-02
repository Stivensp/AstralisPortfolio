import React, { useEffect, useRef, useState } from "react";
import "../styles/project.css";

const Project = () => {
  const sliceRef = useRef(null);
  const botonesRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [returningCard, setReturningCard] = useState(null);
  const totalSlides = 3;

  // 🎠 EFECTO DE CARRUSEL
  useEffect(() => {
    if (sliceRef.current) {
      sliceRef.current.style.transform = `translateX(-${index * 26.8}%)`;
      sliceRef.current.style.transition = "transform 0.7s ease";
    }
  }, [index]);

  // 🧩 Cambiar z-index de los botones según si hay carta expandida
  useEffect(() => {
    if (botonesRef.current) {
      botonesRef.current.style.zIndex = expandedCard ? "9" : "11";
    }
  }, [expandedCard]);

  // 🕹 Manejo del click en cada tarjeta
  const handleCardClick = (cardIndex) => {
    // 🔒 Solo permitir abrir si la tarjeta visible coincide con el index actual
    if (cardIndex - 1 !== index) return;

    const selectedCard = sliceRef.current?.children[cardIndex - 1];
    if (!selectedCard) return;

    if (expandedCard === cardIndex) {
      setExpandedCard(null);
      setReturningCard(cardIndex);

      const cleanup = () => {
        setReturningCard(null);
        document.body.style.overflow = "auto";
        selectedCard.removeEventListener("transitionend", cleanup);
      };
      selectedCard.addEventListener("transitionend", cleanup);
    } else {
      const rect = selectedCard.getBoundingClientRect();
      const scrollX =
        window.scrollX + rect.left + rect.width / 2 - window.innerWidth / 2;
      const scrollY =
        window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;

      window.scrollTo({
        top: scrollY,
        left: scrollX,
        behavior: "smooth",
      });

      setTimeout(() => {
        setExpandedCard(cardIndex);
        document.body.style.overflow = "hidden";
      }, 100);
    }
  };

  // ⏩ Carrusel
  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // 🔹 Rotación de etiquetas I - II - III según posición actual
  const indicators = ["I", "II", "III"];
  const rotated = indicators.map((_, i) => indicators[(i + index) % totalSlides]);

  return (
    <div className="main_project">
      {/* 🧩 Decoraciones */}
      <img id="img_top_project" src="../Assets/Cave/Cave1.svg" alt="" />
      <img id="img_top_project-chain" src="../Assets/Cave/Cadenas.svg" alt="" />
      <img id="img_top_project-tuerca" src="../Assets/Cave/Engranaje.svg" alt="" />
      <img className="image-background-project" src="../Assets/Backgrounds/a.png" alt="" />
      <img id="img_down_project" src="../Assets/Cave/Separete-Cav.svg" alt="" />

      {/* Texto temporal o overlay */}
      <div className="container_project_ef">
        <h1>Projects</h1>
        <p>
          At this stage we can see all <br /> my projects at the moment, i hope you enjoy it
        </p>
      </div>

      {/* 🎠 Carrusel principal */}
      <div className="project_C_slice">
        <div ref={sliceRef} className="carrousel">
          <div
            className={`project_c_1 
              ${expandedCard === 1 ? "expand" : ""} 
              ${returningCard === 1 ? "returning" : ""}`}
            onClick={() => handleCardClick(1)}
          ><img src="..\Assets\Project\1.png" alt="" /></div>

          <div
            className={`project_c_2 
              ${expandedCard === 2 ? "expand" : ""} 
              ${returningCard === 2 ? "returning" : ""}`}
            onClick={() => handleCardClick(2)}
          ><img src="..\Assets\Project\2.png" alt="" /></div>

          <div
            className={`project_c_3 
              ${expandedCard === 3 ? "expand" : ""} 
              ${returningCard === 3 ? "returning" : ""}`}
            onClick={() => handleCardClick(3)}
          ><img src="..\Assets\Project\3.png" alt="" /></div>
        </div>
      </div>

      {/* Botones del carrusel (sin alterar estructura) */}
      <div ref={botonesRef} className="botones_style">
        <div className="botones_project">
          <button className="btn_project prev" onClick={prevSlide}>
            {rotated[2]}
          </button>
          <button className="btn_project_Y">-----</button>
          <button className="btn_project next" onClick={nextSlide}>
            {rotated[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
