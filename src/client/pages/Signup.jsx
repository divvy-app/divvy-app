import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <h1>New Account</h1>
          <div className="input-signup">
          <label htmlFor="email">Name </label>
          <div><input id="email" type="text" name="email" className="email-label" placeholder="Enter your first name"/></div>
          </div>
          <div className="input-signup">
          <label htmlFor="email">Email </label>
          <div><input id="email" type="text" name="email" className="email-label" placeholder="Enter your email"/></div>
          </div>
          <div className="input-signup">
          <label htmlFor="password">Password </label>
          <div><input id="password" type="text" name="password" className="pass-label" placeholder="Enter your password"/></div>
          </div>
          <div className="form-input-btn">
            <button className="login-form-btn" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;



