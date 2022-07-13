import React, { useState } from "react";

// includes JSX
const Login = () => {
  const [login, setLogin] = useState("");

  const goGithub = () => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=4d828c754c60a2276cbe";
  };

  function submit(e) {
    let form = document.querySelector(".login-form");
    e.preventDefault(); // This prevents the window from reloading
    let formdata = new FormData(form);
    let inputEmail = formdata.get("email");
    let inputPass = formdata.get("password");

    if (inputEmail && inputPass) {
      console.log("this is the email,", inputEmail);
      console.log("this is the password", inputPass);
    }

    const data = JSON.stringify({
      email: inputEmail,
      password: inputPass,
    });

    const url = `http://localhost:3000/user/login`;
    fetch(url, {
<<<<<<< HEAD
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
=======
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
    })
    .then(res => res.json())
    .then(res => {
      if (res.err) setLogin("Login Unsuccessful, Try Again")
      else if (res === true) {
        //setLogin("Login Successful")
        window.location.href="http://localhost:8080/history"; 
      }
    })
    .catch(err => {
      setLogin("Login Unsuccessful, Try Again")
>>>>>>> fd2a3c49b4d8129aa81005d953236890e980d64c
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.err) setLogin("Login Unsuccessful");
        console.log("response: ", res);
        //window.location.href="http://localhost:8080/history";
      })
      .catch((err) => {
        setLogin("Login Unsuccessful");
      });
  }

  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <h1> Welcome back </h1>
          <button id="githubBtn" onClick={goGithub}>
            <img src={"/assets/images/github.png"}></img>Login with GitHub
          </button>
          <div className="input-login">
            <label htmlFor="email">Email </label>
            <div>
              <input
                id="email"
                type="text"
                name="email"
                className="email-label"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="input-login">
            <label htmlFor="password">Password </label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                className="pass-label"
                placeholder="Enter your password"
              />
            </div>
            <div className="forgot">Forgot your password?</div>
          </div>
          <div className="form-input-btn">
            <button className="login-form-btn" type="button" onClick={submit}>
              Login
            </button>
          </div>
          <div className="loginFalse">{login}</div>
          <div className="signup">
            Don't have an account?{" "}
            <a href="http://localhost:8080/signup">Sign Up Here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
