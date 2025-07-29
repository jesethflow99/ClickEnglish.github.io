import React from 'react'
import Aside from '../layout/Aside'

const Dashboard = () => {
  return (
    <div className='Dashboard container-fluid d-flex flex-row vh-100'>
        <div className="col col-3 mt-0">
            <Aside />
        </div>
        <div className="col col-9 d-flex flex-column align-items-center justify-content-center">
            <h1 className='text-center'>Bienvenido al Dashboard</h1>
            <p className='text-center'>Aquí puedes gestionar tus cursos, ver tus notificaciones y mucho más.</p>
            {/* Aquí puedes agregar más contenido relacionado con el dashboard */}
        </div>
        
        
    </div>
  )
}

export default Dashboard