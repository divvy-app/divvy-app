import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteBill } from "../redux/billSlice";
import axios from 'axios';

function Bill({props}) {
  const dispatch = useDispatch();
  const { allBills } = useSelector((state)=> state.bill);

 console.log('bills',props)
  //const items = [];
  // for (let i = 0; i < props.cost.length; i++){
  //   items.push(<div>{props.cost[i].title}: {props.cost[i].price}</div>)
  // }

  function deleteThisBill(){
    dispatch(deleteBill(props._id));
    console.log(allBills);
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
  // title, totalCost, numSplit, userCost, user_id
    return(
      <div className='bill'>
          <button onClick={()=>deleteThisBill()}>X</button>
          <div>Bill title: {props.title}</div>
          <div>Bill id: {props._id} </div>
          <div>Total cost: {props.totalCost} </div>
          <div>My cost: {props.userCost} </div>
 
      </div>
 
    );
  
}

export default Bill;

