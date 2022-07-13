import React, {useState} from "react";

// includes JSX
const Split = () => {
  const [split, setSplit] = useState("");

/*   window.onload=function() {
    let form = document.querySelector(".split-form");
    form.addEventListener("click", function (e) {
      e.preventDefault() // This prevents the window from reloading
      let formdata = new FormData(this);
      let expense = formdata.get("expense");
      let total = parseFloat(formdata.get("total"));
      let people = parseFloat(formdata.get("people"));
      let split = (total/people).toFixed(2);
      if (expense && total && people) {
        console.log("this is the expense name,", expense);
        console.log("this is the total", total);
        console.log("this is the split num of people", people);
        console.log("Split: ", split)
        setSplit(`$${split}/person`)
      }

/*       const data = JSON.stringify({
        email: inputEmail,
        password: inputPass,
      })

      const url = `http://localhost:3000/api/addBill`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        .then(res => res.json())
        .then(res => {
            if (res.err) setLogin("Login Unsuccessful")
            else window.location.href="http://localhost:8080/history"; 
        }) */
  //}); 

    function submit () {
      //console.log("this is the expense name,");
      let form = document.querySelector(".split-form");
      form.addEventListener("click", function (e) {
        e.preventDefault() // This prevents the window from reloading
        let formdata = new FormData(this);
        let expense = formdata.get("expense");
        let total = parseFloat(formdata.get("total"));
        let people = parseFloat(formdata.get("people"));
        let split = (total/people).toFixed(2);
        if (expense && total && people) {
          console.log("this is the expense name,", expense);
          console.log("this is the total", total);
          console.log("this is the split num of people", people);
          console.log("Split: ", split)
          setSplit(`$${split}/person`)
        }
    });
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
      <div className="expenseTitle">Expense Title <input className="titleInput" name="expense"/></div>
      <div className="total">Total $ <input className="totalInput" name="total"/></div>
      <div className="splitNum">Split between <input className="splitInput" name="people"/> people</div>
      <button className="split-btn" type="button" onClick={submit}>Split</button>
      <div className="calculation"><u>{split}</u></div>
      </div>
      </form>
      </div>
    </div>
  )
};

export default Split;
