import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact container text-center Contact py-5">
      <div className="row align-items-center justify-content-center">
      <div className="card col-12 col-lg-6 mx-auto">
        <div className="background"></div>
        <div className="logo">
          <p className="icon">cE</p>
          
        </div>
        <div className="box box1">
          <span className="icon">
          <i className="svg bi bi-whatsapp text-blod"></i>
          </span>
          
        </div>
        <div className="box box2">
          <span className="icon">
          <i className="svg bi bi-envelope"></i>
          </span>
        </div>
        <div className="box box3">
          <span className="icon">
          <i className="svg bi bi-facebook"></i>
          </span>
        </div>
        <div className="box box4"></div>
      </div>
      <div className="map col-12 col-lg-6 mx-auto">
        <h3 className="text-center">Ubicación</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x1234567890abcdef!2sSan%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1634567890123"
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
