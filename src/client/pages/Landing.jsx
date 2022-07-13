import React from "react";
import { useNavigate } from 'react-router';

// includes JSX
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing">
        <div className="landingTitle">DIV/VY</div>
        <div className="moto">Splitting bills has never been easier</div>
        <button id='landing-button' onClick={()=>{navigate('/login')}} > Let's Get Started </button>
      </div>
    </div>
  )
};

export default Landing;
