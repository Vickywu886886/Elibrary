import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import "./Account.css"

export async function action(obj) {
    console.log(obj)
    return null
}

export default function Register() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // Call your action or submit logic here
    };

    return (
        <div>
        <Navbar />
        <div className="login-container">
        <h1>Sign up for your account</h1>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    {...register('email')} // Register the email input
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register('password')} // Register the password input
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
        </div>
    );
}
