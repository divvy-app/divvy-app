import React from 'react';
import '../styles/bill.css'

function Bill({props}) {
  
  const items = [];
  for (let i = 0; i < props.cost.length; i++){
    items.push(<div>{props.cost[i].title}: {props.cost[i].price}</div>)
  }
    return(
      <div className='bill'>
          <button onClick={()=>console.log('lalala')}>X</button>
          <div>id#: {props._id}</div>
          <div>Bill#: {props.title}</div>
          
          <div>{items}</div>
          <div>My Total: {props.myTotal}</div>
      </div>
 
    );
  
}

export default Bill;

