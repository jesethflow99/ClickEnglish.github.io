import React from "react";

const DropText = () => {
  return (
    <div>
      <p class="d-inline-flex gap-1">
        <button
          class="btn btn-warning btn-lg"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#card"
          aria-expanded="false"
          aria-controls="card"
        >
          <b>Valores <i class="bi bi-arrow-down-short"></i></b>
        </button>
      </p>
      <div class="collapse" id="card">
        <div class="card card-body text-start overflow-auto w-100"> 
          <b>Visión: </b><br />
          Ser una Academia líder y competitiva en la enseñanza del idioma inglés, comprometidos con la excelencia personal, académica y la calidad en el servicio, destacando en las estrategias y programas creativos y actualizados para las mejoras continuas.
          <br />
          <b>Misión: </b><br />
          Academia responsable de la enseñanza del idioma inglés, que proporciona a sus estudiantes los conocimientos lingüísticos necesarios para una mejor formación personal, académica y profesional, fomentando una ambiente seguro, tranquilo, alegre y con armonía para potenciar la consolidación de la interculturalidad.
        </div>
      </div>
    </div>
  );
};

export default DropText;