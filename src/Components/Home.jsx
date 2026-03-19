import React, { useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    const layers = [
      { id: "Sun", factor: 0.7 },
      { id: "Grass_Right", factor: 0.35 },
      { id: "Grass_Left", factor: 0.3 },
      { id: "Tapon-Right", factor: 0.45 },
      { id: "Tapon-Left", factor: 0.25 },
      { id: "Mountain-Right", factor: 0.3 },
      { id: "Mountain-left", factor: 0.2 },
      { id: "Mountain-left_tap", factor: 0.1 },
    ];

    const elements = layers
      .map(({ id, factor }) => {
        const el = document.getElementById(id);
        return el ? { el, factor } : null;
      })
      .filter(Boolean);

    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateParallax = () => {
      elements.forEach(({ el, factor }) => {
        el.style.transform = `translate3d(0, ${lastScrollY * factor}px, 0)`;
      });
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    // 🔧 Evita reflows innecesarios
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="main_home">
      <div className="container_home">
        <div className="Container_all">
          <img id="Rock" src="../Assets/Parallax/Recurso 1Piedras.png" alt="" />
          <img id="Mountain-left" src="../Assets/Parallax/Mountains.svg" alt="" />
          <img id="Mountain-left_tap" src="../Assets/Parallax/Mountains.svg" alt="" />
          <img id="Mountain-Right" src="../Assets/Parallax/Mountain-Bridge.svg" alt="" />
          <img id="Tapon-Right" src="../Assets/Parallax/TaponRight.svg" alt="" />
          <img id="Tapon-Left" src="../Assets/Parallax/TaponLeft.svg" alt="" />
          <img id="Poste" src="../Assets/Parallax/Poste.svg" alt="" />
          <img id="logo" src="../Assets/Parallax/Logo.png" alt="" />
          <img id="Cloud_Up" className="cloud float1" src="../Assets/Parallax/Recurso 4Cloud1.png" alt="" />
          <img id="Cloud_Left" className="cloud float2" src="../Assets/Parallax/Recurso 7Cloud4.png" alt="" />
          <img id="Cloud_Left_up" className="cloud float3" src="../Assets/Parallax/Recurso 5Cloud2.png" alt="" />
          <img id="Cloud_Right_Middle" className="cloud float4" src="../Assets/Parallax/Recurso 6Cloud3.png" alt="" />
          <img id="Cloud_Right_Down" className="cloud float5" src="../Assets/Parallax/Recurso 8Cloud5.png" alt="" />
          <img id="Cloud_Right_Down2" className="cloud float5" src="../Assets/Parallax/Recurso 8Cloud5.png" alt="" />
      <div className="bloquer"> 
    
      </div>
          <img id="Grass_Right" src="../Assets/Parallax/Grass-right.svg" alt="" />
          <img id="Grass_Left" src="../Assets/Parallax/Grass-Left.svg" alt="" />
          <img id="Sun" src="../Assets/Parallax/Sun.svg" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
