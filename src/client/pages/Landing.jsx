import React from "react";
import { useNavigate } from 'react-router';
import '../styles/landing.css'

// includes JSX
const Landing = () => {
  const navigate = useNavigate();

  return (<div className="landing">
    <button id='landing-button' onClick={()=>{navigate('/login')}} > Let's get started! </button>
  </div>)
};

export default Landing;
