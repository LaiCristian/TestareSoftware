// eslint-disable-next-line
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const HeroesShow = () => {
  const navigate = useNavigate();
  const storedCharacters = JSON.parse(sessionStorage.getItem('characters'));

  const goHome = () =>{
    navigate("/home");
  }

  function newgame(){
    navigate("/character");
  }

  function campaign(){
    navigate("/campaign");
  }

  return (
    <div className="main" id='heroes_show'>
      My Heroes
      <div className='mainShowChar'>
        <div className='heroes_show'>
              <div className='showIMG' id={`showIMG${storedCharacters[0].image}`}></div>
              <p className="mainButton" id='movBright'>{storedCharacters[0].name}</p>
              <div className='stats_show'>
                <div>
                  <div className="icon" id="icon5"></div>
                  <p className='slideNr' id='smallTxt1'>{storedCharacters[0].strength}</p>
                </div>
                <div>
                  <div className="icon" id="icon6"></div>
                  <p className='slideNr' id='smallTxt2'>{storedCharacters[0].agility}</p>
                </div>
                <div>
                  <div className="icon" id="icon7"></div>
                  <p className='slideNr' id='smallTxt3'>{storedCharacters[0].intelligence}</p>
                </div>
                <div>
                  <div className="icon" id="icon8"></div>
                  <p className='slideNr' id='smallTxt4'>{storedCharacters[0].health}</p>
                </div>
              </div>
            </div>
            <div className='heroes_show'>
              <div className='showIMG' id={`showIMG${storedCharacters[1].image}`}></div>
              <p className="mainButton" id='movBright'>{storedCharacters[1].name}</p>
              <div className='stats_show'>
                <div>
                  <div className="icon" id="icon5"></div>
                  <p className='slideNr' id='smallTxt1'>{storedCharacters[1].strength}</p>
                </div>
                <div>
                  <div className="icon" id="icon6"></div>
                  <p className='slideNr' id='smallTxt2'>{storedCharacters[1].agility}</p>
                </div>
                <div>
                  <div className="icon" id="icon7"></div>
                  <p className='slideNr' id='smallTxt3'>{storedCharacters[1].intelligence}</p>
                </div>
                <div>
                  <div className="icon" id="icon8"></div>
                  <p className='slideNr' id='smallTxt4'>{storedCharacters[1].health}</p>
                </div>
              </div>
            </div>
            <div className='heroes_show'>
              <div className='showIMG' id={`showIMG${storedCharacters[2].image}`}></div>
              <p className="mainButton" id='movBright'>{storedCharacters[2].name}</p>
              <div className='stats_show'>
                <div>
                  <div className="icon" id="icon5"></div>
                  <p className='slideNr' id='smallTxt1'>{storedCharacters[2].strength}</p>
                </div>
                <div>
                  <div className="icon" id="icon6"></div>
                  <p className='slideNr' id='smallTxt2'>{storedCharacters[2].agility}</p>
                </div>
                <div>
                  <div className="icon" id="icon7"></div>
                  <p className='slideNr' id='smallTxt3'>{storedCharacters[2].intelligence}</p>
                </div>
                <div>
                  <div className="icon" id="icon8"></div>
                  <p className='slideNr' id='smallTxt4'>{storedCharacters[2].health}</p>
                </div>
              </div>
            </div>
        </div>
      <div>
        <button className="button" id="option1" onClick={goHome}>Go Back</button>
        <button className="button" id="option1" onClick={newgame}>New Game</button>
        <button className="button" id="option1" onClick={campaign}>Continue Game</button>
      </div>
    </div>
  )
}

export default HeroesShow;