import React from 'react';
import ContactoFormularioSlider from "./ContactoFormularioSlider";
import '../assets/scss/_03-Componentes/_ConsultasAyuda.scss';

const ConsultasAyuda = () => {
  return (
    <div className="ayuda">
      <h2>Ayuda</h2>
      <form>
        <h1>Formulario de Ayuda</h1>
     
        <ContactoFormularioSlider />

      </form>
    </div>
  );
}

export default ConsultasAyuda;
