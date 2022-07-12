import React from "react";
import Bill from './Bill';
import axios from 'axios';
import '../styles/history.css';

// includes JSX
const History = () => {

  // how is the data going to structure? 

  const fakeDate = [
    {title: 123, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 3200},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {title: 456, cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120}
  ];
  
    axios.get('/history')
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
    for (let i = 0; i < fakeDate.length; i++){
      bills.push(<Bill props={fakeDate[i]} />)
    }
  
  return (

  <div className="history">
    {bills}
  </div>
  )
};

export default History;
