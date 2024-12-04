import React from "react";
import "./SuccessStories.css"; // Archivo CSS para los estilos

const SuccessStories = () => {
  const stories = [
    {
      title: "Aviation Insight",
      description: "Aplicación para preparación de examenes y cursos de aviación.",
      image: require("assets/img/aviation.png"),
      link: "https://aviationinsight.net/"
    },
    {
      title: "Aviation Insight ATP",
      description: "Versión 2 de ATP con nuevas funcionalidades y administración de materias.",
      image: require("assets/img/atp.png"),
      link: "https://atp.aviationinsight.net/"
    },
    {
      title: "University ATP",
      description: "Plataforma de inscripción a cursos con pasarela de pagos PayPal.",
      image: require("assets/img/university.png"),
      link: "https://university.aviationinsight.net/"
    },
    {
      title: "Nidos Aguila",
      description: "Plataforma desarrollada para la administración de escuelas de futbol del Club Anerica.",
      image: require("assets/img/nidos.png"),
      link: ""
    },
  ];

  return (
    <div className="success-stories-container">
      <h2 className="section-title">Casos de Éxito</h2>
      <p className="section-description">
        Conoce algunos de los proyectos más destacados en los que hemos trabajado.
      </p>
      <div className="cards-container">
        {stories.map((story, index) => (
          <div className="card" key={index}>
            <img src={story.image} alt={story.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{story.title}</h3>
              <p className="card-description">{story.description}</p>
              <a href={story.link}><p className="card-description">visita el sitio</p></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
