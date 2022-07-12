import React from "react";

// includes JSX
const Login = () => (
  <div>
    <div>This is the login page</div>
    <a
      href="https://github.com/login/oauth/authorize?client_id=4d828c754c60a2276cbe"
      class="btn btn-danger"
    >
      <span class="fa fa-github"></span> Github Login
    </a>
  </div>
);

export default Login;
