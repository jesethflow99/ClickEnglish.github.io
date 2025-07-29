import React from 'react'

const Aside = () => {
  return (
        <aside className="Aside d-flex flex-column align-items-center justify-content-center vh-100 gap-3 border p-3 rounded mt-0 ">
            <h2>Engilsh Academy</h2>

            <a href="" className="btn btn-dark w-100"><i class="bi bi-house"></i> Inicio</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-bell"></i> Notificaciones</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-chat-dots"></i> Mensajes</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-card-text"></i> Foro</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-book"></i> Recursos</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-file-earmark-text"></i> Tareas</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-calendar3"></i> Calendario</a>
            <a href="" className="btn btn-dark w-100"><i class="bi bi-person"></i> Chatbot</a>
            <hr className='w-100' style={{border:"1px solid black"}} />
            
        </aside>
  )
}

export default Aside