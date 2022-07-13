import React, { useEffect } from "react";
import Bill from './Bill';
import axios from 'axios';
import '../styles/history.css';
import { useDispatch, useSelector } from "react-redux";
import { loadingBills } from "../redux/billSlice";

// includes JSX
const History = () => {

  // how is the data going to structure? 

  const fakeData = [
    {_id: 0, title: 'Codesmith tuition', cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 3200},
    {_id: 1, title: 'Korean BBQ', cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {_id: 2, title: 'DMT', cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {_id: 3, title: 'Asado Negro', cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {_id: 4, title: 'Vet bill', cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120},
    {_id: 5, title: 'whatelse can this be', cost: [{ title: 'abc', price: 300},{ title: 'def', price: 600}], myTotal: 120}
  ];
    const dispatch = useDispatch();
    const { allBills } = useSelector((state)=> state.bill);
    
    // useEffect(()=>{
    //   axios.get('/billHistory')
    //   .then(function (response) {
    //     // handle success
  
    //     // console.log(response);
    //     // let bills = [];
    //     // for (let i = 0; i < response.length; i++){
    //     //   bills.push(<Bill props={response[i]} />)
    //     // }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
    // },[]);



  let bills = []; 
  if(allBills.length){
    for (let i = 0; i < allBills.length; i++){
      bills.push(<Bill props={allBills[i]} />)
    }
  }
  
  function test(){
    dispatch(loadingBills(fakeData));
    console.log('bill',allBills);
  }  
  return (

  <div className="history">
    {bills}
  <div><button onClick={()=> test()}>test</button></div>
  </div>
  )
};

export default History;
