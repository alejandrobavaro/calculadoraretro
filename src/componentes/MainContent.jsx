import React from "react";
import MainCalculadora from "./MainCalculadora";
import MainPublicidadSlider from "./MainPublicidadSlider";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="main-content-container">
      {/* Contenedor principal del contenido */}
      <div className="content-wrapper">
        {/* Componente de la calculadora - Elemento principal */}
        <MainCalculadora />

        {/* Slider de publicidad - Se muestra debajo de la calculadora */}
        <MainPublicidadSlider />
      </div>
    </main>
  );
}

export default MainContent;