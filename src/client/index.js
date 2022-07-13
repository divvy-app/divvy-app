import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from './redux/store';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
 <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
 </Provider> 
);

