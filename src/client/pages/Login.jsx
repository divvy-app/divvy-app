import React from "react";

// includes JSX
const Login = () => {
<<<<<<< HEAD
  return (
  <div>
    <div className="login-container">
    <form className="login-form">
    <h1> Welcome back </h1>
    <div className="input-login">
    <label htmlFor="email">Email </label>
    <div><input id="email" type="text" name="email" className="email-label" placeholder="Enter your email"/></div>
    </div>
    <div className="input-login">
    <label htmlFor="password">Password </label>
    <div><input id="password" type="text" name="password" className="pass-label" placeholder="Enter your password"/></div>
    <div className="forgot">Forgot your password?</div>
    </div>
    <div className="form-input-btn">
      <button className="login-form-btn" type="submit">Login</button>
    </div>
    <div className="github">or Sign in with Github</div>
    <div className="signup">Don't have an account? <a href="http://localhost:8080/signup">Sign Up Here</a></div>
    </form>
    </div>
  </div>
  )
=======
  const goGithub = () => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=4d828c754c60a2276cbe";
  };

  return (
    <div>
      <div>This is the login page</div>
      <button id="githubBtn" onClick={goGithub}>
        Login with GitHub
      </button>
    </div>
  );
>>>>>>> d3ec08cfc3f0e4d2ae39a28ea37aeadf6568f09a
};

export default Login;



