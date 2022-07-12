import React from "react";
import Bill from './Bill';
import axios from 'axios';
import '../styles/history.css';
import { useDispatch, useSelector } from "react-redux";
import { loadingBills } from "../redux/billSlice";

// includes JSX
const History = () => {

  // how is the data going to structure? 

  const fakeData = [
    {title: 123, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 3200},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120}
  ];
    const dispatch = useDispatch();
    const { bill } = useSelector((state)=> state.bill);
    console.log('bill',bill);

    axios.get('/billHistory')
    .then(function (response) {
      // handle success

      // console.log(response);
      // let bills = [];
      // for (let i = 0; i < response.length; i++){
      //   bills.push(<Bill props={response[i]} />)
      // }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });


  let bills = [];
    for (let i = 0; i < fakeData.length; i++){
      bills.push(<Bill props={fakeData[i]} />)
    }
  
  function test(){
    dispatch(loadingBills(fakeData));
    console.log('bills',bills);
  }  
  return (

  <div className="history">
    {bills}
  <div><button onClick={()=> test()}>test</button></div>
  </div>
  )
};

export default History;
