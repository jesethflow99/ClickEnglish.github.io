import React, { useEffect, useState } from 'react';
import CardCourse from '../components/CardCourse/CardCourse';

const Section1 = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("cursos.json")
      .then(response => response.json())
      .then(data => setCursos(data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []); 

  return (
    <div className='section1 container text-center py-5'>
      <div className="cursos">
        <h2 className='text-center'>Nuestros <b className='text-primary m-10'>Cursos</b></h2>
        <div className="row">
          {cursos.map((curso, index) => (
            <div className="col-md-4" key={index}>
              <CardCourse 
                title={curso.title}
                description={curso.description}
                duration={curso.duration}
                level={curso.level}
                price={curso.price}
                image={curso.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;