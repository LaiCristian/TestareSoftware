/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
//import ExitGame from './ExitGame';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "./axios";

const Campaign = () => {
  const storedCharacters = JSON.parse(sessionStorage.getItem('characters'));
  //console.log(storedCharacters)

  const [health1, sethealth1] = useState(storedCharacters[0].health);
  const [health2, sethealth2] = useState(storedCharacters[1].health);
  const [health3, sethealth3] = useState(storedCharacters[2].health);
  
  const [spinValue, setSpinValue] = useState(0);
  const [needSpin, setNeedSpin] = useState(0);
  const [story, setStory] = useState('');
  const [storyStage, setStoryStage] = useState(1);
  const [storyID, setStoryID] = useState(null);
  const [rollOrNext, setrollOrNext] = useState('Next');
  const navigate = useNavigate();

  const continueGame = () =>{
    if(needSpin === 0){
      
    }else{
      setrollOrNext("Roll")
    }
  }

  useEffect(() => {
    const fetchStartData = async () => {
      try {
        const response = await axiosInstance.get('game/start', {});
        setStory(response.data);
        setNeedSpin(response.data.needRoll);
        continueGame();
        // if(response.data.needRoll == 0){
        //   setrollOrNext("Next")
        // }else{
        //   setrollOrNext("Roll")
        // }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchStartData();
  }, []);

  //console.log(story);

  function spinWheel() {
    const newValue = Math.floor(Math.random() * 20);
    setSpinValue(newValue);

    const currentAngle = getComputedStyle(document.documentElement).getPropertyValue('--wheel_angle');
    const currentAngleValue = parseFloat(currentAngle);
    console.log(currentAngle)
    const newAngle = 144-16.36 * newValue;
    document.documentElement.style.setProperty('--wheel_angle', `${currentAngleValue-360}deg`);
    
    setTimeout(()=>{
      document.documentElement.style.setProperty('--wheel_angle', `${newAngle}deg`);
    },500)
    console.log(newValue+1)
  }

  const addExitWind = () =>{
    const element = document.getElementById('targetExit');
    element.classList.remove('dissapear');
  }

  const removeExitWind = () =>{
    const element = document.getElementById('targetExit');
    element.classList.add('dissapear');
  }

  const goHome = () =>{
    navigate("/home");
  }

  return (
    <div className="main" id='campaign'>
      <div className='topRama_cont'>
        <div className='TRleft'>
          <div className='img_stat'>
            <button className='var_img2 deadChar' id={`showIMG${storedCharacters[0].image}`}></button>
            <div className='stats_show small_stats_show'>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon5"></div>
                <p className='slideNr' id='smallTxt5'>{storedCharacters[0].strength}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon6"></div>
                <p className='slideNr' id='smallTxt6'>{storedCharacters[0].agility}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon7"></div>
                <p className='slideNr' id='smallTxt7'>{storedCharacters[0].intelligence}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon8"></div>
                <p className='slideNr' id='smallTxt8'>{storedCharacters[0].health}</p>
              </div>
            </div>
          </div>
          <div className='img_stat'>
            <button className='var_img2' id={`showIMG${storedCharacters[1].image}`}></button>
            <div className='stats_show small_stats_show'>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon5"></div>
                <p className='slideNr' id='smallTxt5'>{storedCharacters[1].strength}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon6"></div>
                <p className='slideNr' id='smallTxt6'>{storedCharacters[1].agility}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon7"></div>
                <p className='slideNr' id='smallTxt7'>{storedCharacters[1].intelligence}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon8"></div>
                <p className='slideNr' id='smallTxt8'>{storedCharacters[1].health}</p>
              </div>
            </div>
          </div>
          <div className='img_stat'>
            <button className='var_img2' id={`showIMG${storedCharacters[2].image}`}></button>
            <div className='stats_show small_stats_show'>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon5"></div>
                <p className='slideNr' id='smallTxt5'>{storedCharacters[2].strength}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon6"></div>
                <p className='slideNr' id='smallTxt6'>{storedCharacters[2].agility}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon7"></div>
                <p className='slideNr' id='smallTxt7'>{storedCharacters[2].intelligence}</p>
              </div>
              <div className='char_and_stat_camp'>
                <div className="icon ic5" id="icon8"></div>
                <p className='slideNr' id='smallTxt8'>{storedCharacters[2].health}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='TRright'></div>
        <div className='TAngle'></div>
      </div>
      <div className='story'>
        <div className='story_text'>{story.mainText ? story.mainText : ''}</div>
        <div className='divinline'>
          <button className="button" id="option1" onClick={continueGame}>{rollOrNext}</button>
        </div>
      </div>
      <div className='botRama_cont'>
        <div className='BRleft'></div>
        <div className='BRright'>
          <p className='title' id='smallerTxt'> STAGE: {storyStage}</p>
          <button className='mainButton glow' onClick={addExitWind}>QUIT GAME</button>
        </div>
        <div className='BAngle'></div>
        <div className='BAngle' id='ramaAng'></div>
        <div className='BRright' id='ramaBloc'>
          <button className="button" id="spin" onClick={spinWheel}>Spin</button>
        </div>
      </div>
      <div className='roata_cont'>
        <div className='roata'id='secondSpin'>
        </div>
        <div className='pin'></div>
      </div>
      {/* <ExitGame className='dissapear' id='targetExit' onClick={addExitWind}/> */}
      <div className='exit_window dissapear' id='targetExit'>
        <div className='story_text' id='largeTxt'>Quit the game?</div>
          <div className='divinline'>
            <button className="button" id="option1" onClick={removeExitWind}> Go back</button>
            <button className="button" id="option2" onClick={goHome}>Quit</button>
          </div>
      </div>
    </div>
  )
}

export default Campaign;
