import React from "react";
import "./CardCourse.css";

const CardCourse = ({title,description,duration,level,price,image}) => {
  return (
    <div className="CardCourse">
      
      <div className="card">
      <h3 className="text title text-dark">{title}</h3>
        <div className="img">
          <img src={image} alt="" />
          
        </div>
        
        <div className="textBox">
          
          <p className="text  description">{description}</p>
          <ul>
          <p className="text head">{title}</p>
            <li>duracion: {duration} </li>
            <li>Nivel: {level} </li>
            <li>Precio: {price} </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
