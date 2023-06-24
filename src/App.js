import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";


function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      {/* Add your main page content here */}
    </div>
  );
}

function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <MainPage />
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default LoginScreen;
