import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // Perform registration logic here
        navigate('/'); // Navigate to the main page after successful registration
    }

    return (
        <div className="login-container">
            <h2>Join Project Saturn</h2>
            <div className="auth-form-container">
                
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                    />

                    <button type="submit">Register</button>
                </form>

            </div>
            <p className="link-text">
                Already have an account?{" "}
                <span
                    className="login-link"
                    onClick={() => navigate("/login")}
                >
                    Sing in.
                </span>
            </p>
        </div>
    );
};