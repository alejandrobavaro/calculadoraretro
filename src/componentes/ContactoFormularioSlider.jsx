import React from "react";
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

const ContactoFormularioSlider = () => {
  return (
    <div className="contacto-full-width-container">
      <div className="expanded-form-container">
        <h2 className="main-form-title">Formulario de Contacto</h2>
        
        <form
          className="expanded-contact-form"
          action="https://formspree.io/f/xbjnlgzz"
          target="_blank"
          method="post"
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej: Juan Pérez"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ej: +51 987654321"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ej: ejemplo@correo.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="Ej: Consulta sobre calculadora"
                required
              />
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                placeholder="Escribe tu mensaje detallado aquí..."
                required
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn-large">
              <i className="bi bi-send-fill"></i> ENVIAR MENSAJE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactoFormularioSlider;