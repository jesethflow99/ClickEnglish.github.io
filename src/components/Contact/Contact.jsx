import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact container text-center Contact py-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h3 className="text-center">Contáctanos</h3>
        <div className="card ">
      
      <div className="background"></div>
      <div className="logo">
        <p className="icon"><img className="img-fluid w-100" src="favicon.png" alt="" /></p>
        
      </div>
      <div className="box box1">
        <span className="icon">
          <a href="https://web.whatsapp.com/send/?phone=526251066847&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0" target="__blank"><i className="svg bi bi-whatsapp text-blod"></i></a>
        
        </span>
        
      </div>
      <div className="box box2">
        <span className="icon">
          <a href="mailto:clickenglishc@gmail.com" target="__blank"><i className="svg bi bi-envelope"></i></a>
        
        </span>
      </div>
      <div className="box box3">
        <span className="icon">
          <a href="https://www.facebook.com/CLICKENGLISHCUAUHTEMOC" target="__blank"><i className="svg bi bi-facebook"></i></a>
        
        </span>
      </div>
      <div className="box box4"></div>
    </div>
        </div>
      
      <div className="map col-12 col-lg-6 mx-auto">
        <h3 className="text-center">Ubicación</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.467855695237!2d-106.87187682542483!3d28.405136475789554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1cb994415e593%3A0x58433557b238a6d9!2sClick%20English%20Cuauht%C3%A9moc!5e0!3m2!1ses-419!2sus!4v1750786130530!5m2!1ses-419!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
