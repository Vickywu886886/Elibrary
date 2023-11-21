import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Account.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../../api';



export default function Account() {
    const location = useLocation();

    const message = new URLSearchParams(location.search).get("message");

    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus]= React.useState("idle")
    const [error, setError]=React.useState(null)
    const navigate= useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)

        .then(data=>navigate("/wishlist", { replace: true }))
        .catch(err=>setError(err))
        .finally(()=>setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
        <Navbar/>
        <div className="login-container">
  
            <h1>Sign in to your account</h1>
            {message && <h3 style={{color:"red"}}>{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status==="submitting"}>
                    {status==="submitting"?"Logging in" : "Log in"}
                    
                    </button>
                    <Link to="/register" style={{textDecoration:"underline"}}>Don't have an account? Register here</Link>
            </form>
        </div>
        </div>
    )

}
