import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Account.css"
import { useLocation } from 'react-router-dom';


export default function Account() {
    const location = useLocation();

    const message = new URLSearchParams(location.search).get("message");

    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
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
            <p style={{color:'red'}}>{message || ""}</p>
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
                <button>Log in</button>
            </form>
        </div>
        </div>
    )

}
