import React from "react";

// includes JSX
const Split = () => {
  return (
    <div>
      <div className="login-container">
      <form className="login-form">
      <img src={"/assets/images/pie.png"}></img>
      <h1> Split a Bill </h1>
      <div>Expense Title: <input/></div>
      <div>Total: $<input/></div>
      <div>Number of Friends: <input/></div>
      <button className="login-form-btn" type="submit">Split</button>
      </form>
      </div>
    </div>
  )
};

export default Split;
