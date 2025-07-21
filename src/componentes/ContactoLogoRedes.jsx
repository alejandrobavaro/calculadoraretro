import React from "react";
import "../assets/scss/_03-Componentes/_ContactoLogoRedes.scss";

// Importación de iconos
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope, 
  FaPaypal 
} from "react-icons/fa";

// Componente principal
const ContactoLogoRedes = () => {
  // Array con datos de redes sociales para mapear
  const redes = [
    {
      nombre: "Facebook",
      icono: <FaFacebook />,
      url: "https://www.facebook.com/alegondramusic",
    },
    {
      nombre: "Instagram",
      icono: <FaInstagram />,
      url: "https://www.instagram.com/alegondramusic/?hl=es",
    },
    {
      nombre: "YouTube",
      icono: <FaYoutube />,
      url: "https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ",
    },
    {
      nombre: "Escríbenos un mail",
      icono: <FaEnvelope />,
      url: "mailto:bavaroalejandro@gmail.com",
    },
    {
      nombre: "Colaborá",
      icono: <FaPaypal />,
      url: "https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC",
    }
  ];

  return (
    // Contenedor principal
    <div className="contacto-redes-wrapper">
      
      {/* Contenedor del logo y texto */}
      <div className="logo-container">
        {/* Enlace del logo */}
        <a href="/" className="logo-link">
          {/* Imagen del logo */}
          <img
            alt="Logo Calculadora Retro"
            className="logo-img"
            src="/img/02-logos/logocalculadoraretro1.png"
            loading="lazy"
          />
        </a>
        
        {/* Texto "Calculadora Retro" con estilos específicos */}
        <h2 className="logo-texto">
          Calculadora {/* Parte normal */}
          <span className="logo-texto-retro">Retro</span> {/* Parte con estilo especial */}
        </h2>
      </div>

      {/* Contenedor de redes sociales */}
      <div className="redes-container">
        {/* Título de la sección */}
        <h2 className="redes-titulo">Conecta con nosotros</h2>
        
        {/* Listado de redes sociales */}
        <div className="redes-lista">
          {redes.map((red, index) => (
            <a
              key={index}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-item"
              aria-label={red.nombre}
            >
              <span className="red-icon">{red.icono}</span>
              <span className="red-text">{red.nombre}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactoLogoRedes;