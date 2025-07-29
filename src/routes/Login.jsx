import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css' // Assuming you have a CSS file for styling the login page

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // Check if the user is already logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            navigate('/dashboard'); // Redirect to dashboard if already logged in
        }
    }, [navigate]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const user = { email, password };
        const fetchLogin = async () => {
            try {
                const response = await fetch('login.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                const data = await response.json();
                localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
                navigate('/dashboard'); // Redirect to dashboard on successful login
            } catch (error) {
                setError('Login failed. Please check your credentials.');
            } finally {
                setLoading(false);
            }
        };
        fetchLogin();
    };
    
  return (

    <div className="login container-fliud d-flex w-100  justify-content-center align-items-center text-white">
        <div className="rounded p-4 shadow-lg bg-dark" style={{ width: '400px' }}>
            <h2 className="text-center ">Iniciar Sesión</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder=""required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="" required />
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={()=>navigate("/Dashboard")}>Iniciar Sesión</button>
            </form>
            <div className="text-center mt-3">
                <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
            </div>
        </div>
    </div>

  )
}

export default Login