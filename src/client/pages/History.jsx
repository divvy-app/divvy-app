import React, { useEffect } from "react";
import Bill from './Bill';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { loadingBills } from "../redux/billSlice";

// includes JSX
const History = () => {
  // how is the data going to structure? 

    const dispatch = useDispatch();
    const { allBills } = useSelector((state)=> state.bill);
     
    useEffect(()=>{
      axios.get('http://localhost:3000/user/getBills')
      .then(function (response) {
        // handle success
        dispatch(loadingBills(response.data))
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },[]);

  console.log('allbills',allBills)
  let bills = [];
  for (let i = 0; i < allBills.length; i++){
    bills.push(<Bill props = {allBills[i]} />)
  }

  return (
  <div className="historyContainer">
    <div className="history">
    {bills}
      

    </div>
  </div>
  )
};

export default History;
