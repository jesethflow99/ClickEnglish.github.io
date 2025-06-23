import React from "react";

const DropText = () => {
  return (
    <div>
      <p class="d-inline-flex gap-1">
        <button
          class="btn btn-warning btn-lg"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#filosofia"
          aria-expanded="false"
          aria-controls="filosofia"
        >
          <b>Valores <i class="bi bi-arrow-down-short"></i></b>
        </button>
      </p>
      <div class="collapse" id="filosofia">
        <div class="card card-body text-start overflow-auto w-100"> 
          <b>Visión: </b><br />
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
          <br />
          <b>Misión: </b><br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nihil sit earum quos in quo asperiores quasi eum ad? Ipsa, harum? Dolorem illum id doloribus? Reprehenderit ex sequi natus sint?
        </div>
      </div>
    </div>
  );
};

export default DropText;