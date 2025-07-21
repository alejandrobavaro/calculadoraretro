import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/scss/_01-General/_App.scss";

// Componentes
import HeaderUnificado from "./componentes/HeaderUnificado";
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainCalculadora from "./componentes/MainCalculadora";
import Footer from "./componentes/Footer";
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ConsultasAyuda from "./componentes/ConsultasAyuda";

function App() {
  return (
    <Router>
      <HeaderUnificado />

      <hr className="divider" />

      <main className="main-container">
        <div className="content-wrapper">
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<MainCalculadora />} />
            
            {/* Ruta de contacto */}
            <Route path="/contacto" element={<ContactoLogoRedes />} />
            
            {/* Ruta de ayuda */}
            <Route path="/ayuda" element={<ConsultasAyuda />} />
            
            {/* Ruta alternativa para calculadora */}
            <Route path="/calculadora" element={<MainCalculadora />} />
          </Routes>
        </div>
      </main>

      <hr className="divider" />

      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;