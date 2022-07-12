/**
 * @file Defines the top-level app component for the Divvy app. Project is
 * currently configured to accept a mix of .jsx and .tsx files.
 */

import React from "react";
import "./style.css";
import HooksExample from "./HooksExample";

// includes JSX
const App = () => (
  <div>
    <h1>Testing</h1>
    <HooksExample name="Pal" />
    <a
      href="https://github.com/login/oauth/authorize?client_id=4d828c754c60a2276cbe"
      class="btn btn-danger"
    >
      <span class="fa fa-github"></span> Github Login
    </a>
  </div>
);

export default App;

{
  /* <a
  href="https://github.com/login/oauth/authorize?client_id=4d828c754c60a2276cbe"
  class="btn btn-danger"
>
  <span class="fa fa-github"></span> Github Login
</a>; */
}

{
  /* <form action="https://github.com/login/oauth/authorize?client_id=4d828c754c60a2276cbe">
<button id="githubBtn" type="submit">
  Login with GitHub
</button>
</form> */
}
