import React from "react";
import { useNavigate } from 'react-router';

// includes JSX
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing">
        <button id='landing-button' onClick={()=>{navigate('/login')}} aria-label="landing" > Let's Get Started </button>
      </div>
    </div>
  )
};

export default Landing;
