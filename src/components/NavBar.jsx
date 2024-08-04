import React, { useEffect, useState } from 'react';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Ajusta el valor según tu diseño
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Selecciona todos los enlaces con hash (#)
    const links = document.querySelectorAll('a[href^="#"]');

    // Añade un evento click a cada enlace
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace

        // Obtiene el id del elemento al que se desea desplazar
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calcula la posición del objetivo
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

          // Desplazamiento suave con duración de 800ms (ajustar según necesidad)
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <nav className={scrolled ? 'black-bg' : ''}>
      <div id="header">
        <img src="./images/avatar.png" alt="Imagen de avatar" />
        <h2>TorruTech</h2>
      </div>
      <div id="navLinks">
        <a href="#home">Inicio</a>
        <a href="#aboutMe">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#video">Currículum</a>
        <a href="#projects">Proyectos</a>
        <a href="#form-container">Contacto</a>
      </div>
    </nav>
  );
};
