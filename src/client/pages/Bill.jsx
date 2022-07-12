import React from 'react';
import '../styles/bill.css'

function Bill({props}) {
  console.log(props)
 
    return(
      <div className='bill'>
          <div>Bill#: {props.billID}</div>
          <div>{props.item[0]}</div>
          <div>{props.item[1]}</div>
          <div>My Total: {props.myTotal}</div>
      </div>
 
    );
  
}

export default Bill;

