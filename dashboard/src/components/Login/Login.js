import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="form-box login"></div>
      <div className="form">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="/">Forgot Pasword?</a>
          </div>
          <div className="btn">
            <button className="submit">Login</button>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/registration">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
