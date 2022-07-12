import React from "react";
import image from "../images/flower2.jpeg"

// includes JSX
const Split = () => {
  return (
    <div>
      <div className="login-container">
      <form className="login-form">
      <h1> Split a Bill </h1>
      <div>Expense Title: <input/></div>
      <div>Total: $<input/></div>
      <div>Number of Friends: <input/></div>
      <button className="login-form-btn" type="submit">Split</button>
      <img src={image}></img>
      </form>
      </div>
    </div>
  )
};

export default Split;
