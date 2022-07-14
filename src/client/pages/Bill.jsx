import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteBill } from "../redux/billSlice";
import axios from 'axios';

function Bill({props}) {
  const dispatch = useDispatch();
  const { allBills } = useSelector((state)=> state.bill);
 console.log('bills',props)

  function deleteThisBill() {
    dispatch(deleteBill(props._id));
    console.log(allBills);

    const data = JSON.stringify({
      _id: props._id
    });

    const url = `http://localhost:3000/user/deleteBill`;
    fetch(url, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: data
    })
    .then(res => res.json())
    .then(res => {
      if (res === false) console.log("Didn't delete Bill")
      else if (res === true) console.log("Bill Deleted")
    })
    .catch(err => {
      console.log(err);
    })

    // axios.post('/deleteBill', {
    //   id: props._id
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  } 
    return(
      <div className='bill'>
          <button onClick={()=>deleteThisBill()}>X</button>
          <div>ID: {props._id} </div>
          <div>Expense: {props.title}</div>
          <div>Total Cost: $ {props.totalCost}</div>
          <div>Split: {props.numSplit} friends </div>
          <div>Individual Cost: $ {props.userCost}  </div>
 
      </div>
 
    );
  
}

export default Bill;

