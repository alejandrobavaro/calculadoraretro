import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_MainContentNovedades.scss";

function MainContentNovedades() {
  // Estado para el carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Imágenes para el carrusel
  const carouselImages = [
    "/img/03-img-banners1/banner-1.png",
    "/img/03-img-banners1/banner-2.png",
    "/img/03-img-banners1/banner-3.png",
    "/img/03-img-banners1/banner-4.png"
  ];

  // Efecto para cambiar automáticamente las imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="main-content-novedades">
      {/* Carrusel de imágenes */}
      <div className="hero-carousel">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContentNovedades;
