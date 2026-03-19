import { useRef, useEffect, useState } from "react";
import "../styles/project.css";

const Project = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const slidesCount = 5; // número de slides

  // Funciones de navegación
  const nextSlide = () => setIndex((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slidesCount) % slidesCount);

  // Mueve la track al slide correcto
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
      trackRef.current.style.transition = "none"; // sin animación para cero lag
    }
  }, [index]);

  // Drag detection
  const handleMouseDown = (e) => {
    setIsDragging(false);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (Math.abs(e.clientX - dragStartX) > 5) {
      setIsDragging(true);
    }
  };

  const handleClick = (e) => {
    if (isDragging) e.preventDefault(); // evita click si hubo arrastre
  };

  return (
    <div className="main_project">
      <img id="img_top_project" src="../Assets/Cave/Cave1.svg" alt="" />
      <img id="img_top_project-chain" src="../Assets/Cave/Cadenas.svg" alt="" />
      <img id="img_top_project-tuerca" src="../Assets/Cave/Engranaje.svg" alt="" />
      <img className="image-background-project" src="../Assets/Backgrounds/a.png" alt="" />
      <img id="img_down_project" src="../Assets/Cave/Separete-Cav.svg" alt="" />

      <div className="container_carrousel">
        <div className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide}>
            &#10094;
          </button>

          <div
            className="slider-track"
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            <div className="slide">
              <a
                href="https://www.figma.com/design/gE99Gicf0UskOpQ6hBNVDd/Ibaguer?node-id=0-1&t=9N4a0wvUpdzVWkO0-1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
              >
                <img src="../Assets/Project/1.png" alt="Proyecto 1" />
              </a>
            </div>

            <div className="slide">
              <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <img src="../Assets/Project/2.png" alt="Proyecto 2" />
              </a>
            </div>

            <div className="slide">
              <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <img src="../Assets/Project/3.png" alt="Proyecto 3" />
              </a>
            </div>

            <div className="slide">
              <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <img src="../Assets/Project/4.png" alt="Proyecto 4" />
              </a>
            </div>

            <div className="slide">
              <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <img src="../Assets/Project/5.png" alt="Proyecto 5" />
              </a>
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      <div className="container_project_ef">
        <h1>Projects</h1>
        <p>
          At this stage we can see all <br /> my projects at the moment, I hope you enjoy it
        </p>
      </div>

    </div>
  );
};

export default Project;