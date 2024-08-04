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

  return (
    <nav className={scrolled ? 'black-bg' : ''}>
      <div id="header">
        <img src="/public/images/avatar.png" alt="Imagen de avatar" />
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
