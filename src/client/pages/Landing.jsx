import React from "react";
import { useNavigate } from 'react-router';

// includes JSX
const Landing = () => {
  const navigate = useNavigate();

  return (<div>
    <button onClick={()=>{navigate('/login')}} > Let's get started! </button>
  </div>)
};

export default Landing;
