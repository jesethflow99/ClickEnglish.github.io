import React from "react";
import "../styles/header.css"; 
const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img className="logo" src="logo.jpg" alt="Logo" width={100} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cursos">
                  Cursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#filosofia">
                  Filosofía
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
