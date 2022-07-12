import React from "react";

// includes JSX
const Login = () => {
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
};

export default Login;
