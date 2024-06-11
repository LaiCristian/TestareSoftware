import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const ExitGame = ({ className, id }) => {
  const navigate = useNavigate();

  
  const goHome = () =>{
    navigate("/home");
  }

  return (
    <div id={id} className={`exit_window ${className}`}>
      <div className='story_text' id='largeTxt'>Quit the game?</div>
        <div className='divinline'>
          <button className="button" id="option1" onClick={goHome}> Go back</button>
          <button className="button" id="option2" onClick={goHome}>Quit</button>
        </div>
    </div>
  )
}

export default ExitGame;
