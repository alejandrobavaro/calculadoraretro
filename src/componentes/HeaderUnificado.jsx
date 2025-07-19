import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import HeaderDolarApi from "./HeaderDolarApi";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado({ categories = [], onCategoryChange, searchQuery, setSearchQuery }) {
  const location = useLocation();
  const [showCotizaciones, setShowCotizaciones] = useState(false);

  const handleCloseCotizaciones = () => setShowCotizaciones(false);
  const handleShowCotizaciones = () => setShowCotizaciones(true);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="header-unificado">
        <div className="contenedor-header">
          <div className="logo-y-dolar">
            <div className="logo">
              <Link to="/">
                <img 
                  src="/img/02-logos/logocalculadoraretro1.png" 
                  alt="Logo Útiles de Oficina" 
                  className="logo-img" 
                />
              </Link>
            </div>
            <HeaderDolarApi />
          </div>

          <nav className="nav-links">
            <Link to="/" className={isActive("/") ? "activo" : ""}>Inicio</Link>
            <Link to="/calendario-pagos" className={isActive("/calendario-pagos") ? "activo" : ""}>Calendario</Link>
            <Link to="/contacto" className={isActive("/contacto") ? "activo" : ""}>Contacto</Link>
            {/* <Link to="/ayuda" className={isActive("/ayuda") ? "activo" : ""}>Ayuda</Link> */}
            <Link to="/MainTareasEnProceso" className={isActive("/MainTareasEnProceso") ? "activo" : ""}>Tareas</Link>
            <Link to="/main-notas" className={isActive("/main-notas") ? "activo" : ""}>Notas</Link>
            <Link to="/MainCalculadora" className={isActive("/MainCalculadora") ? "activo" : ""}>Calculadora</Link>
            <Link to="/MainTemporizadorTareas" className={isActive("/MainTemporizadorTareas") ? "activo" : ""}>Temporizador</Link>
          </nav>

          <div className="acciones-header">
            <Button variant="outline-primary" onClick={handleShowCotizaciones}>
              <i className="bi bi-currency-dollar"></i>
            </Button>
          </div>
        </div>
      </header>

      <Modal show={showCotizaciones} onHide={handleCloseCotizaciones} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cotizaciones del Dólar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HeaderDolarApi expanded />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCotizaciones}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HeaderUnificado;