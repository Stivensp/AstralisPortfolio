import { useEffect, useState } from "react";
import "../styles/Cargador.css";

const Cargador = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Bloquea el scroll
    document.body.style.overflow = "hidden";

    // Desbloquea el scroll y oculta el loader después de 7s
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "auto";
    }, 7000);

    // Limpieza por si el componente se desmonta antes
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!visible) return null; // si no es visible, no renderiza nada

  return (
    <div className="main_cargador">
      <img
        className="load_cloud"
        src="./Assets/Parallax/Recurso 7Cloud4.png"
        alt="Cargando"
      />
      <div className="loading-container">
        <div className="loading-bar"></div>
      </div>
      Cargando...
    </div>
  );
};

export default Cargador;