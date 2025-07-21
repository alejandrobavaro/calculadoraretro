import React from "react";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

function FooterGondraWorldDev() {
  return (
    <div className="trademarkGondraFooter">
      <div className="textoFooterAutor">
        <a
          href="https://alejandrobavaro.github.io/gondraworld-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-dev-link"
        >
          <div className="textoFooterGondraWorld">
            <i className="fas fa-gem diamond-icon" />
            <span> - Gondra World Dev - </span>
            <i className="fas fa-gem diamond-icon" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FooterGondraWorldDev;
