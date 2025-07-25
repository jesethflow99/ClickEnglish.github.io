import React from "react";
import "./CardCourse.css";

const CardCourse = ({ title, description, duration, level, price, image, info }) => {
  const id = `modal-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="CardCourse">
      <div className="card">
        <h3 className="text title text-dark ">{title}</h3>
        <div className="img">
          <img src={image} alt="img" />
        </div>

        <div className="textBox">
          <h5 className="text description">{description}</h5>
          <ul>
            <li>Nivel: {level}</li>
            <li>Precio: <br /> {price}</li>
          </ul>
          <button
            type="button"
            className="btn btn-primary btn-sm "
            data-bs-toggle="modal"
            data-bs-target={`#${id}`}
          >
            <i className="bi bi-info-circle"></i> Info
          </button>
        </div>
      </div>

      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}Label`}>{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{info}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
