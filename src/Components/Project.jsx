import React, { useEffect, useRef, useState } from "react";
import "../styles/project.css";

const Project = () => {
  const sliceRef = useRef(null);
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

  // 🕹 Manejo del click en cada tarjeta
  const handleCardClick = (cardIndex) => {
    const selectedCard = sliceRef.current?.children[cardIndex - 1];
    if (!selectedCard) return;

    if (expandedCard === cardIndex) {
      // 🔹 Cerrar con retorno suave
      setExpandedCard(null);
      setReturningCard(cardIndex);

      // Espera a que termine la transición y limpia estado
      const cleanup = () => {
        setReturningCard(null);
        document.body.style.overflow = "auto";
        selectedCard.removeEventListener("transitionend", cleanup);
      };
      selectedCard.addEventListener("transitionend", cleanup);

    } else {
      // 🔹 Abrir tarjeta centrando la vista
      const rect = selectedCard.getBoundingClientRect();
      const scrollX = window.scrollX + rect.left + rect.width / 2 - window.innerWidth / 2;
      const scrollY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;

      window.scrollTo({
        top: scrollY,
        left: scrollX,
        behavior: "smooth",
      });

      // Espera a que termine el scroll antes de expandir
      setTimeout(() => {
        setExpandedCard(cardIndex);
        document.body.style.overflow = "hidden";
      }, 100);
    }
  };

  // ⏩ Carrusel
  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

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
        <p>a</p>
      </div>

      {/* 🎠 Carrusel principal */}
      <div className="project_C_slice">
        <div ref={sliceRef} className="carrousel">

          <div
            className={`project_c_1 
              ${expandedCard === 1 ? "expand" : ""} 
              ${returningCard === 1 ? "returning" : ""}`}
            onClick={() => handleCardClick(1)}
          ></div>

          <div
            className={`project_c_2 
              ${expandedCard === 2 ? "expand" : ""} 
              ${returningCard === 2 ? "returning" : ""}`}
            onClick={() => handleCardClick(2)}
          ></div>

          <div
            className={`project_c_3 
              ${expandedCard === 3 ? "expand" : ""} 
              ${returningCard === 3 ? "returning" : ""}`}
            onClick={() => handleCardClick(3)}
          ></div>

        </div>
      </div>

      {/* Botones del carrusel */}
      <div className="botones_project">
        <button className="btn_project prev" onClick={prevSlide}>‹</button>
        <button className="btn_project next" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default Project;
