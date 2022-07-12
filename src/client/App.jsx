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
  </div>
);

export default App;
