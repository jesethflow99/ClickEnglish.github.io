import React from 'react'
import { useNavigate } from "react-router";
import '../styles/hero.css' 
import Ofert from '../components/Ofert'
const Hero = () => {
  const Navigate = useNavigate();
  return (
    <div className='hero'>
      <div className="background"></div>
      <Ofert text="¿Tu hijo necesita aprender inglés para no quedarse atrás?- Click English es la solución para que tu hijo este preparado para la escuela." />
      <div className="content">
        <h1>Aprende Inglés <b>Click</b></h1>
        <p>Nuestra plataforma interactiva te ayuda a dominar el inglés con recursos personalizados, foros de discusión y asistencia en tiempo real.</p>
        <button className="btn btn-warning col-6" onClick={()=>Navigate("/login")} >Comenzar ahora </button>
      </div>  
    </div>
  )
}

export default Hero
