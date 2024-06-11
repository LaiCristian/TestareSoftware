// eslint-disable-next-line
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
  const navigate = useNavigate();
  const sessionUser = sessionStorage.getItem("username");
  function logout(){
    navigate("/login");
  }
  function newgame(){
    navigate("/character");
  }
  function heroes(){
    navigate("/heroes");
  }
  function campaign(){
    navigate("/campaign");
  }
  return (    
    <div className="main" id='homepage'>
      <div className="menu_cont">
        <p className='title' id='margin'>Dungeons & Dragons. Dacian Mystics</p>
        <div className='but_cont'><button className='mainButton' onClick={newgame}>NEW GAME</button></div>
        <div className='but_cont'><button className='mainButton' onClick={heroes}>CONTINUE GAME</button></div>
        {/* <div className='but_cont'><button className='mainButton' onClick={heroes}>MY HEROES</button></div> */}
        <div className='but_cont'><button className='mainButton' onClick={logout}>LOG OUT</button></div>  
        <p className='alpha_txt'>Hello {sessionUser}!</p>
      </div>
    </div>
  )
}

export default Home;
