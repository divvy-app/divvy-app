import React from "react";

// includes JSX
const Split = () => {
  return (
    <div>
      <div className="split-container">
        <form className="split-form">
          <div className="titleSplit">
          <h1> Split a Bill </h1>
          </div>
          <img className="moneygif" src={"/assets/images/money.gif"}></img>
          <div className="userInput">
          <div className="expenseTitle">Expense Title <input className="titleInput"/></div>
          <div className="total">Total $ <input className="totalInput"/></div>
          <div className="splitNum">Split between <input className="splitInput"/> people</div>
          <button className="split-btn" type="submit">Split</button>
          <div className="calculation"><u>$50/person</u></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Split;
