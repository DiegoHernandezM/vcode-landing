import React from 'react';
import './TechnologiesBanner.css'; // Archivo CSS para los estilos

const TechnologiesBanner = () => {
  return (
    <div className="technologies-banner">
      <div className="technologies-track">
        <img
          src={require("assets/img/docker-logo.png")}
          alt="mariadb"
          className="technology-image"
        />
        <img
          src={require("assets/img/logo-aws.png")}
          alt="AWS"
          className="technology-image"
        />
        <img
          src={require("assets/img/mysql-logo.png")}
          alt="mysql"
          className="technology-image"
        />
        <img
          src={require("assets/img/mariadb-logo.png")}
          alt="mariadb"
          className="technology-image"
        />
        <img
          src={require("assets/img/logo-react.png")}
          alt="reactjs"
          className="technology-image"
        />
        <img
          src={require("assets/img/bootstrap-logo.png")}
          alt="Bootstrap"
          className="technology-image"
        />
        <img
          src={require("assets/img/logo-php.png")}
          alt="php"
          className="technology-image"
        />
        <img
          src={require("assets/img/logo-laravel.png")}
          alt="Laravel"
          className="technology-image"
        />
      </div>
    </div>
  );
};

export default TechnologiesBanner;
