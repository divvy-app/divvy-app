import React from 'react';

function Bill({props}) {
  console.log(props)
    
    return(
      <div>
          <div>Bill#: {props.billID}</div>
          <div>My Total: {props.myTotal}</div>
      </div>
 
    );
  
}

export default Bill;

