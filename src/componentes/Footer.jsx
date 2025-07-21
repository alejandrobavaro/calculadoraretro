import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from "./FooterGondraWorldDev";
import { FiHelpCircle, FiMail, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-content-wrapper">
        
        {/* Sección superior con columnas */}
        <div className="footer-main-section">
          
          {/* Columna del logo izquierdo */}
          <div className="footer-brand-column">
            <Link to="/" className="footer-logo-link">
              <FaCalculator className="footer-icon" />
              <span className="brand-name">Calculadora Retro</span>
            </Link>
            
            {/* Contacto y Ayuda movidos aquí */}
            <div className="footer-contact-links">
            <Link to="/" className="footer-link">
                Inicio
              </Link>
              <Link to="/contacto" className="footer-link">
                Contacto
              </Link>
      
              <Link to="/privacidad" className="footer-link">
                Privacidad
              </Link>
          
            </div>
          </div>
          
          {/* Columna central con enlaces */}
          <div className="footer-links-column">
            <h3 className="links-title">Enlaces Rápidos</h3>
            <div className="footer-links-grid">
    
              
              {/* Enlaces de interés agregados */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Calendario
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Tareas
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Dolar Hoy
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Notas
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Temporizador
              </a>
              <Link to="/ayuda" className="footer-link">
                Ayuda
              </Link>
            </div>
          </div>
          
          {/* Columna de redes sociales */}
          <div className="footer-social-column">
            <h3 className="social-title">Buscanos</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FiYoutube />
              </a>
              <a href="mailto:contacto@calculadorapro.com" className="social-icon" aria-label="Email">
                <FiMail />
              </a>
              <a href="#" className="social-icon" aria-label="Soporte">
                <FiHelpCircle />
              </a>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="footer-divider"></div>
        
        {/* Copyright y créditos */}
        <div className="footer-bottom">
          <FooterGondraWorldDev />
          <p className="copyright-text">
            © {new Date().getFullYear()} CalculadoraRetro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;