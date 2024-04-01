
import React from 'react';
import '../App.css';
import ecodeLengua from '../assets/lengua.png';


function Contact() {



  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <img 
        src={ecodeLengua} 
        alt="Contact Us" 
        className="contact-image"
      />

      {/* Sección de formulario de contacto */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Formulario de Contacto</h2>
        {/* Aquí iría el componente o el código del formulario de contacto */}
      </div>

      {/* Sección de YouTube */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Canal YouTube</h2>
        {/* Aquí iría el componente reproductor de video o enlaces a videos destacados */}
      </div>

      {/* Sección de LinkedIn */}
      <div className="contact-section">
        <h2 className="contact-subtitle">LinkedIn</h2>
        {/* Aquí irían enlaces al perfil de LinkedIn y botones de compartir */}
      </div>
    </div>
  );
}

export default Contact;
