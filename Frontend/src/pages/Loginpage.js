
import React, { useState } from 'react';
import './Loginpage.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>

          {/* Username input */}
          <div className="form-group position-relative">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control input-custom"
              id="username"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUserAlt className="input-icon" />
          </div>

          {/* Password input */}
          <div className="form-group position-relative">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control input-custom"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="input-icon" />
          </div>

          {/* Remember me and Forgot Password */}
          <div className="form-group d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ml-2">Remember me</label>
            </div>
            <a href="/" className="forgot-password">Forgot Password</a>
          </div>

          {/* Login button */}

          <Link to="/Home" className="btn btn-primary btn-block">
            Login
          </Link>

          {/* Register link */}
          <div className="text-center mt-3">
            <span>Don't have an account? </span><a href="/" className="register-link">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
