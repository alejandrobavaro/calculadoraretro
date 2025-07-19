// src/App.jsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//------------ESTILOS--------------//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_App.scss";

//------------HEADER--------------//
import HeaderUnificado from "./componentes/HeaderUnificado";

//-----------HOME - MAIN-----------------//
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainCalendarioPagos from "./componentes/MainCalendarioPagos";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
import MainTareasEnProceso from "./componentes/MainTareasEnProceso";
import MainNotas from "./componentes/MainNotas";
import MainCalculadora from "./componentes/MainCalculadora";
import MainTemporizadorTareas from "./componentes/MainTemporizadorTareas";

//--------------FOOTER----------------//
import Footer from "./componentes/Footer";

//-----------CONTACTO-----------------//
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";

//-----------OTROS--------------//
import ConsultasAyuda from "./componentes/ConsultasAyuda";

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <HeaderUnificado 
        categories={['Servicios', 'Impuestos', 'Alquileres']} 
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <hr className="border border-0 opacity-20" />

      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/calendario-pagos" element={<MainCalendarioPagos />} />
            <Route
              path="/contacto"
              element={
                <>
                  <ContactoLogoRedes />
                  <ContactoFormularioSlider />
                </>
              }
            />
            <Route path="/ayuda" element={<ConsultasAyuda />} />
            <Route path="/MainTareasEnProceso" element={<MainTareasEnProceso />} />
            <Route path="/main-notas" element={<MainNotas />} />
            <Route path="/MainCalculadora" element={<MainCalculadora />} />
            <Route path="/MainTemporizadorTareas" element={<MainTemporizadorTareas />} />
          </Routes>
        </div>
      </div>

      <hr className="border border-0 opacity-20" />
      <MainPublicidadSlider />
      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;
