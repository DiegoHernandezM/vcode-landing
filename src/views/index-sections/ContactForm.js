import React, { useState } from "react";
import "./ContactForm.css"; // Archivo CSS para estilos
import { Container } from "reactstrap";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbljwwey", { // Reemplaza {form_id}
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="contact-container">
      <Container >
        <div className="contact-container">
          {/* Sección del logotipo */}
          <div className="contact-logo-section">
            <img src={require("assets/img/logo-black.png")} alt="Logo" className="contact-logo" />
          </div>

          {/* Sección del formulario */}
          <div className="contact-form-section">
            <h2>Contáctanos</h2>
            <p>Para más información o cotizar tu proyecto, llena el formulario.</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="form-button">Enviar</button>
              {status === "SUCCESS" && <p className="form-success">¡Mensaje enviado con éxito!</p>}
              {status === "ERROR" && <p className="form-error">Hubo un error al enviar tu mensaje. Intenta de nuevo.</p>}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
