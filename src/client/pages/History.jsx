import React from "react";
import Bill from './Bill';
import axios from 'axios';
import '../styles/history.css';

// includes JSX
const History = () => {

  // how is the data going to structure? 
  // bill/cost/myTotal???

  const fakeDate = [
    {billID: 123, item: [['rent', 3000], ['water', 200]], myTotal: 3200},
    {billID: 456, item: [['restaurant', 200], ['pasta', 40]], myTotal: 120},
    {billID: 456, item: [['restaurant', 200], ['pasta', 40]], myTotal: 120},
    {billID: 456, item: [['restaurant', 200], ['pasta', 40]], myTotal: 120},
    {billID: 456, item: [['restaurant', 200], ['pasta', 40]], myTotal: 120},
    {billID: 456, item: [['restaurant', 200], ['pasta', 40]], myTotal: 120}
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
