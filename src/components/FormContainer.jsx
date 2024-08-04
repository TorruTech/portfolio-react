// src/components/FormContainer.js
import React from 'react';

export const FormContainer = () => {
  return (
    <div className="form-container" id="form-container">
      <h1>Contáctame</h1>
      <h3>Vamos a construir algo grande juntos. Ponte en contacto conmigo</h3>
      <form action="#" method="post">
        <input type="text" id="name" name="name" placeholder="Tu nombre" required />
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
        <input type="text" id="subject" name="subject" placeholder="Asunto" required />
        <textarea id="message" name="message" placeholder="Mensaje" required></textarea>
        <button type="submit">ENVIAR MENSAJE</button>
      </form>
    </div>
  );
};
