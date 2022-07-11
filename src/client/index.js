import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";

// specifically tell it where to render it out

render(<App />, document.querySelector("#root"));
