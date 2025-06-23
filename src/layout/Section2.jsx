import React from 'react'
import DropText from '../components/DropText/DropText'
import image from '../assets/img/section2.jpg'

const Section2 = () => {
  return (
    <div className="container text-center Section2 py-5">
      <div className="row align-items-center justify-content-center">
        
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <img src={image} alt="Filosofía" className="img-fluid img-thumbnail" />
        </div>
        
        <div className="col-12 col-lg-6 text-lg-center text-center justify-content-center">
          <h1>
            Nuestra <b className='text-primary'>Filosofía</b>
          </h1>
          <DropText />
        </div>
      </div>
    </div>
  )
}

export default Section2
