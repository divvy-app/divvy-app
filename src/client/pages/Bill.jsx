import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteBill } from "../redux/billSlice";
import axios from 'axios';

function Bill({props}) {
  const dispatch = useDispatch();
  const { allBills } = useSelector((state)=> state.bill);


  const items = [];
  for (let i = 0; i < props.cost.length; i++){
    items.push(<div>{props.cost[i].title}: {props.cost[i].price}</div>)
  }

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
    return(
      <div className='bill'>
          <button onClick={()=>deleteThisBill()}>X</button>
          <div>id#: {props._id}</div>
          <div>Bill#: {props.title}</div>
          
          <div>{items}</div>
          <div>My Total: {props.myTotal}</div>
      </div>
 
    );
  
}

export default Bill;

