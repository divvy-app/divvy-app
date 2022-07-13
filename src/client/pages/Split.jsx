import React, {useState} from "react";
import { useSelector } from "react-redux";

// includes JSX
const Split = () => {
  const [split, setSplit] = useState("");
  const [bill, setBill] = useState("");

  const email = useSelector((state) => state.user.email);
  
  function submit (e) {
    let form = document.querySelector(".split-form");
    e.preventDefault() // This prevents the window from reloading
    let formdata = new FormData(form);
    let expense = formdata.get("expense");
    let totalNum = parseFloat(formdata.get("total"));
    let people = parseFloat(formdata.get("people"));
    let split = (totalNum/people).toFixed(2);
    
    if (expense && totalNum && people) {
      console.log("this is the expense name,", expense);
      console.log("this is the total", totalNum);
      console.log("this is the split num of people", people);
      console.log("Split: ", split)
      console.log("this is the email:", email)
      setSplit(`$${split}/person`)
    }
    
    const data = JSON.stringify({
      email: email,
      title: expense,
      total: totalNum, 
      numSplit: people,
      userCost: split
    })

    const url = `http://localhost:3000/user/addBill`
    fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
    })
    .then(res => {
      if (res.status === 200) setBill("Added Bill");
      else if (res.status === 400) console.log("couldn't add bill")
    }) 
  }

  return (
    <div>
      <div className="split-container">
      <form className="split-form">
      <div className="titleSplit">
      <h1> Split a Bill </h1>
      </div>
      <img className="moneygif" src={"/assets/images/money.gif"}></img>
      <div className="userInput">
      <div className="expenseTitle">Expense Title <input className="titleInput" name="expense" aria-label="expense"/></div>
      <div className="total">Total $ <input className="totalInput" name="total" aria-label="total"/></div>
      <div className="splitNum">Split between <input className="splitInput" name="people" aria-label="people"/> people</div>
      <button className="split-btn" type="button" onClick={submit}>Split</button>
      <div className="calculation"><u>{split}</u></div>
      <div className="addedBill">{bill}</div>
      </div>
      </form>
      </div>
    </div>
  );
};

export default Split;
