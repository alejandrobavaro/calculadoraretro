import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado() {
  const isActive = (path) => useLocation().pathname === path;

  return (
    <header className="header-unificado-minimal">
      <div className="contenedor-header-minimal">
        <div className="logo-minimal">
          <Link to="/">
            <img
              src="/img/02-logos/logocalculadoraretro1.png"
              alt="Logo"
              className="logo-img-minimal"
            />
          </Link>
          <span className="titulo-retro">Calculadora Retro</span>
        </div>

        <nav className="nav-links-minimal">
          <Link to="/" className={isActive("/") ? "activo" : ""}>
            Calculadora
          </Link>

        
        </nav>
      </div>
    </header>
  );
}

export default HeaderUnificado;
