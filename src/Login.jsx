import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        onLogin(); // Call the onLogin function passed as prop
        navigate('/'); // Navigate to the main page after successful login
    }

    return (
        <div className="login-container">
            <h1>Sign in to Project Saturn</h1>
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        id="username"
                        name="username"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
                    />
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <p className="link-text">
                Don't have an account?{" "}
                <span
                    className="register-link"
                    onClick={() => navigate("/register")}
                >
                    Register here.
                </span>
            </p>
        </div>
    );
};