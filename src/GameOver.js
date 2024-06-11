// eslint-disable-next-line
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const GameOver = () => {
  const navigate = useNavigate();

  
  const goHome = () =>{
    navigate("/home");
  }

  return (
    <div className="main" id='gameover'>
      Game Over
      <button className="button" id="option1" onClick={goHome}>Go Home</button>
    </div>
  )
}

export default GameOver;