import React from "react";

// includes JSX
const Login = () => {
  return (
  <div>
    <div className="login-container">
    <form className="login-form">
    <h1> Welcome back </h1>
    <div>
    <label htmlFor="email" className="login-label">Email </label>
    <input id="email" type="text" name="email" className="login-input" placeholder="Enter your email"/>
    </div>
    <div>
    <label htmlFor="password" className="login-label">Password </label>
    <input id="password" type="text" name="password" className="login-input" placeholder="Enter your password"/>
    <div>Forgot your password?</div>
    </div>
    <div className="form-input-btn">
      <button className="login-form-btn" type="submit">Login</button>
    </div>
    <div>Sign Up</div>
    </form>
    </div>
  </div>
  )
};

export default Login;



