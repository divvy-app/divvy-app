import React from 'react';
import '../styles/bill.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteBill } from "../redux/billSlice";


function Bill({props}) {
  const dispatch = useDispatch();
  const { allBills } = useSelector((state)=> state.bill);


  const items = [];
  for (let i = 0; i < props.cost.length; i++){
    items.push(<div>{props.cost[i].title}: {props.cost[i].price}</div>)
  }

  function test(){
    dispatch(deleteBill(props._id));
    console.log(allBills)

  }
    return(
      <div className='bill'>
          <button onClick={()=>test()}>X</button>
          <div>id#: {props._id}</div>
          <div>Bill#: {props.title}</div>
          
          <div>{items}</div>
          <div>My Total: {props.myTotal}</div>
      </div>
 
    );
  
}

export default Bill;

