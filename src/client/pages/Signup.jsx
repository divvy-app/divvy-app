import React, {useState} from "react";

const Signup = () => {
  const [signup, setSignup] = useState("");
  
  function submit (e) {
    let form = document.querySelector(".login-form");
    e.preventDefault() // This prevents the window from reloading
    let formdata = new FormData(form);

    let inputUsername = formdata.get("username");
    let inputEmail = formdata.get("email");
    let inputPass = formdata.get("password");
    if (inputEmail && inputPass && inputUsername) {
      console.log("this is the username,", inputUsername);
      console.log("this is the email,", inputEmail);
      console.log("this is the password", inputPass);
    }

     const data = JSON.stringify({
      username: inputUsername,
      email: inputEmail,
      password: inputPass,
    })

      const url = `http://localhost:3000/user/signUp`
        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        .then(res => {
          if (res.status === 200) {
            window.location.href="http://localhost:8080/history";
            //setSignup("Successful Sign-up") 
          }
          else if (res.status === 400) {
            setSignup("Un-Successful Sign-up") 
          }
        })
        .catch(err => {
          setSignup("Unsuccessful Sign-up")
        })
    }

  return (
  <div>
    <div className="login-container">
    <form className="login-form">
    <h1>New Account</h1>
    <div className="input-signup">
    <label htmlFor="email">Username </label>
    <div><input id="email" type="text" name="username" className="email-label" placeholder="Enter your username"/></div>
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
      <button className="login-form-btn" type="button" onClick={submit}>Sign Up</button>
    </div>
    <div className="signUpFalse">{signup}</div>
    </form>
    </div>
  </div>
  )
};

export default Signup;



