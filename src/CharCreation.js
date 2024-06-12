/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axiosInstance from "./axios";

const CharCreation = () => {
  const navigate = useNavigate();
  const [slideValue, setSlideValue] = useState(0);
  const [slideCharValue, setSlideCharValue] = useState(0);
  const [typeSel, setTypeSel] = useState(0);
  const [saveState, setSaveState] = useState(0);
  //////////////////////////////////////////////
  const [slide1, setSlide1] = useState(10);
  const [slide2, setSlide2] = useState(10);
  const [slide3, setSlide3] = useState(10);

  const [health1, sethealth1] = useState(100);
  const [health2, sethealth2] = useState(100);
  const [health3, sethealth3] = useState(100);
  //////////////////////////////////////////////
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(10);
  const [slider3, setSlider3] = useState(10);
  const [slider4, setSlider4] = useState(10);
  const [slider5, setSlider5] = useState(10);
  const [slider6, setSlider6] = useState(10);
  const [slider7, setSlider7] = useState(10);
  const [slider8, setSlider8] = useState(10);
  const [slider9, setSlider9] = useState(10);
  //////////////////////////////////////////////
  const [chImage1, setChImage1] = useState(0);
  const [chImage2, setChImage2] = useState(0);
  const [chImage3, setChImage3] = useState(0);
  const [chName, setChName] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [totalStats, setTotalStats] = useState('0');
  const [curentChar, setCurentChar] = useState('0');
  const [savetxt, setSavetxt] = useState('hidden');
  const [savetxtF, setSavetxtF] = useState('hidden');
  const [savetxtS, setSavetxtS] = useState('hidden');
  const [saveMsg, setSaveMsg] = useState('Try Again');
  const handleSlide = (index) => {
    const value = index * -100 + slideValue;
    if(value < -300){
      setSlideValue(0);
      setTypeSel(0);
    }else if(value>0){
      setSlideValue(-300);
      setTypeSel(3);
    }else{
      setSlideValue(value);
      if(index>0){
        setTypeSel(typeSel+1);
      }else{
        setTypeSel(typeSel-1);
      }
    }
  };

  const changeChar = (index) => {
    const value = index * -100;
    setSlideCharValue(value);
    setCurentChar(index);
    if(index==0){
      setSlide1(slider1);
      setSlide2(slider2);
      setSlide3(slider3);
      setTotalStats(30-(parseInt(slider1)+parseInt(slider2)+parseInt(slider3)));
      setChName(name1);
    }else if(index==1){
      setSlide1(slider4);
      setSlide2(slider5);
      setSlide3(slider6);
      setTotalStats(30-(parseInt(slider4)+parseInt(slider5)+parseInt(slider6)));
      setChName(name2);
    }else if(index==2){
      setSlide1(slider7);
      setSlide2(slider8);
      setSlide3(slider9);
      setTotalStats(30-(parseInt(slider7)+parseInt(slider8)+parseInt(slider9)));
      setChName(name3);
    }
  };

  const handleSlide1 = (event) => {
    if(curentChar==0){
      let sum = parseInt(slide3)+parseInt(slide2);
      if(parseInt(event.target.value)+sum>30){
        setSlide1(30-sum);
        setSlider1(30-sum);
      }else{
        setSlide1(event.target.value);
        setSlider1(event.target.value);
      }
      if((30-parseInt(slide3)-parseInt(slide2)-parseInt(event.target.value))>=0){
        setTotalStats(30-parseInt(slide3)-parseInt(slide2)-parseInt(event.target.value))
      }
    }else if(curentChar==1){
      let sum = parseInt(slide3)+parseInt(slide2);
      if(parseInt(event.target.value)+sum>30){
        setSlide1(30-sum);
        setSlider4(30-sum);
      }else{
        setSlide1(event.target.value);
        setSlider4(event.target.value);
      }
      if((30-parseInt(slide3)-parseInt(slide2)-parseInt(event.target.value))>=0){
        setTotalStats(30-parseInt(slide3)-parseInt(slide2)-parseInt(event.target.value))
      }
    }else if(curentChar==2){
      let sum = parseInt(slide3)+parseInt(slide2);
      if(parseInt(event.target.value)+sum>30){
        setSlide1(30-sum);
        setSlider7(30-sum);
      }else{
        setSlide1(event.target.value);
        setSlider7(event.target.value);
      }
      if((30-parseInt(slide3)-parseInt(slide2)-parseInt(event.target.value))>=0){
        setTotalStats(30-parseInt(slide3)-parseInt(slide2)-parseInt(event.target.value))
      }
    }
  };

  const handleSlide2 = (event) => {
    if(curentChar==0){
    let sum = parseInt(slide3)+parseInt(slide1);
    if(parseInt(event.target.value)+sum>30){
      setSlide2(30-sum);
      setSlider2(30-sum);
    }else{
      setSlide2(event.target.value);
      setSlider2(event.target.value);
    }
    if((30-parseInt(slide3)-parseInt(slide1)-parseInt(event.target.value))>=0){
      setTotalStats(30-parseInt(slide3)-parseInt(slide1)-parseInt(event.target.value))
    }
    }else if(curentChar==1){
      let sum = parseInt(slide3)+parseInt(slide1);
      if(parseInt(event.target.value)+sum>30){
        setSlide2(30-sum);
        setSlider5(30-sum);
      }else{
        setSlide2(event.target.value);
        setSlider5(event.target.value);
      }
      if((30-parseInt(slide3)-parseInt(slide1)-parseInt(event.target.value))>=0){
        setTotalStats(30-parseInt(slide3)-parseInt(slide1)-parseInt(event.target.value))
      }
    }else if(curentChar==2){
      let sum = parseInt(slide3)+parseInt(slide1);
      if(parseInt(event.target.value)+sum>30){
        setSlide2(30-sum);
        setSlider8(30-sum);
      }else{
        setSlide2(event.target.value);
        setSlider8(event.target.value);
      }
      if((30-parseInt(slide3)-parseInt(slide1)-parseInt(event.target.value))>=0){
        setTotalStats(30-parseInt(slide3)-parseInt(slide1)-parseInt(event.target.value))
      }
    }
  };


  const handleSlide3 = (event) => {
    if(curentChar==0){
      let sum = parseInt(slide2)+parseInt(slide1);
      if(parseInt(event.target.value)+sum>30){
        setSlide3(30-sum);
        setSlider3(30-sum);
      }else{
        setSlide3(event.target.value);
        setSlider3(event.target.value);
      }
      if((30-parseInt(slide2)-parseInt(slide1)-parseInt(event.target.value))>=0){
        setTotalStats(30-parseInt(slide2)-parseInt(slide1)-parseInt(event.target.value))
      }
      }else if(curentChar==1){
        let sum = parseInt(slide2)+parseInt(slide1);
        if(parseInt(event.target.value)+sum>30){
          setSlide3(30-sum);
          setSlider6(30-sum);
        }else{
          setSlide3(event.target.value);
          setSlider6(event.target.value);
        }
        if((30-parseInt(slide2)-parseInt(slide1)-parseInt(event.target.value))>=0){
          setTotalStats(30-parseInt(slide2)-parseInt(slide1)-parseInt(event.target.value))
        }
      }else if(curentChar==2){
        let sum = parseInt(slide2)+parseInt(slide1);
        if(parseInt(event.target.value)+sum>30){
          setSlide3(30-sum);
          setSlider9(30-sum);
        }else{
          setSlide3(event.target.value);
          setSlider9(event.target.value);
        }
        if((30-parseInt(slide2)-parseInt(slide1)-parseInt(event.target.value))>=0){
          setTotalStats(30-parseInt(slide2)-parseInt(slide1)-parseInt(event.target.value))
        }
      }
  };

  const chImgChange = (ind)=> {
    if(curentChar == 0){
      setChImage1(ind)
    }else if(curentChar == 1){
      setChImage2(ind)
    }else if(curentChar == 2){
      setChImage3(ind)
    }
    
  }

  const chNameChange = (event) => {
    if(curentChar == 0){
      setName1(event.target.value);
      setChName(event.target.value);
    }else if(curentChar == 1){
      setName2(event.target.value);
      setChName(event.target.value);
    }else if(curentChar == 2){
      setName3(event.target.value);
      setChName(event.target.value);
    }
  };

  const goHome = () =>{
    navigate("/home");
  }

  const saveChar = () =>{
    if(chImage1*chImage2*chImage3!=0 && name1!='' && name2!='' && name3!=''){
      console.log("Save complete")
      setSaveState(1)
      setSavetxt("")
      setSavetxtS("")
      setSavetxtF("hidden")
      setSaveMsg("Start")
      const characters = [
        {
            name: name1,
            health: health1, 
            strength: slider1,
            agility: slider2,
            intelligence: slider3,
            image: chImage1
        },
        {
            name: name2,
            health: health2,
            strength: slider4,
            agility: slider5,
            intelligence: slider6,
            image: chImage2
        },
        {
            name: name3,
            health: health3,
            strength: slider7,
            agility: slider8,
            intelligence: slider9,
            image: chImage3
        }
    ];

    characters.map(async (item) => {
      await axiosInstance.post('character/create', {name: item.name, image: item.image, damage: item.strength, agility: item.agility, intelligence:item.intelligence, health:item.health})
    })
    
    // Store the characters array as a JSON string
    sessionStorage.setItem('characters', JSON.stringify(characters));
    console.log(JSON.stringify(characters))
    }else{
      console.log("No Save")
      setSaveState(0)
      setSavetxt("")
      setSavetxtF("")
      setSavetxtS("hidden")
      setSaveMsg("Try Again")
    }
  }

  const closeWin = () =>{
    if(saveState==0){
    setSavetxt("hidden")
    }else{
      navigate("/campaign");
    }
  }

  return (
    <div className="main" id="character">
      <div className="settings_cont">
        <div>
        <div className="icon" id="icon9" onClick={goHome}></div>
        <p className="title" id="mov">Squad Creation</p>
        </div>
        <div className="settings">
          <div className="setTxt_cont">
            <p className="mainButton" id="smallTxt">Character Name</p>
            <div className="input_cont" id="chname">
              <div className="icon" id="icon4"></div>
              <input className="inp" id="charname" autoComplete="off" type="text" name="chName" value={chName} onChange={chNameChange}/>
            </div>
          </div>
          <div className="setTxt_cont">
            <p className="mainButton" id="smallTxt">Class Selector</p>
            <div className="typeSelector_cont">
              <button className="arrow" id="left" onClick={() => handleSlide(-1)}></button>
              <div className="slide_cont" style={{ '--slideType': `${slideValue}%` }}>
                <div className="type_cont">Archer</div>
                <div className="type_cont">Cleric</div>
                <div className="type_cont">Knight</div>
                <div className="type_cont">Wizard</div>
              </div>
              <button className="arrow" id="right" onClick={() => handleSlide(1)}></button>
            </div>
          </div>
          <div className="setTxt_cont">
            <p className="mainButton" id="smallTxt">Appearance</p>
            <div className={typeSel === 0 ? 'char_img' : 'char_img hidden'} id='archer'>
              <button className='var_img' id='archer1' onClick={() => chImgChange(1)}></button>
              <button className='var_img' id='archer2' onClick={() => chImgChange(2)}></button>
              <button className='var_img' id='archer3' onClick={() => chImgChange(3)}></button>
            </div>
            <div className={typeSel === 1 ? 'char_img' : 'char_img hidden'} id='cleric'>
              <button className='var_img' id='cleric1'onClick={() => chImgChange(4)} ></button>
              <button className='var_img' id='cleric2'onClick={() => chImgChange(5)} ></button>
              <button className='var_img' id='cleric3'onClick={() => chImgChange(6)} ></button>
            </div>
            <div className={typeSel === 2 ? 'char_img' : 'char_img hidden'} id='knight'>
              <button className='var_img' id='knight1' onClick={() => chImgChange(7)}></button>
              <button className='var_img' id='knight2' onClick={() => chImgChange(8)}></button>
              <button className='var_img' id='knight3' onClick={() => chImgChange(9)}></button>
            </div>
            <div className={typeSel === 3 ? 'char_img' : 'char_img hidden'} id='wizard'>
              <button className='var_img' id='wizard1' onClick={() => chImgChange(10)}></button>
              <button className='var_img' id='wizard2' onClick={() => chImgChange(11)}></button>
              <button className='var_img' id='wizard3' onClick={() => chImgChange(12)}></button>
            </div>
          </div>
          <div className="setTxt_cont">
            <p className="mainButton" id="smallTxt">Characteristics</p>
            <div className='stats_cont'>
              <p className="mainButton" id="smallTxt">Points left: {totalStats}</p>
              <div className='slideR_cont'>
                <div className="icon" id="icon5"></div>
                <input className='rangeSlide' type='range' min='0' max='20' value={slide1} id='slider1' onChange={handleSlide1}></input>
                <p className='slideNr' id='smallTxt1'>{slide1}</p>
              </div>
              <div className='slideR_cont'>
                <div className="icon" id="icon6"></div>
                <input className='rangeSlide' type='range' min='0' max='20' value={slide2} id='slider2' onChange={handleSlide2}></input>
                <p className='slideNr' id='smallTxt2'>{slide2}</p>
              </div>
              <div className='slideR_cont'>
                <div className="icon" id="icon7"></div>
                <input className='rangeSlide' type='range' min='0' max='20' value={slide3} id='slider3' onChange={handleSlide3}></input>
                <p className='slideNr' id='smallTxt3'>{slide3}</p>
              </div>
            </div>        
          </div>   
        </div>
        <button className="button" id="save" onClick={saveChar}>Save</button>
      </div>
      <div className='characterShow_cont'>
        <div className='char_show_slide_cont'style={{ '--slideChar': `${slideCharValue}%` }}>
          <div className='char_show'>
            <div className='showIMG' id={`showIMG${chImage1}`}></div>
            <p className="mainButton" id='movBright'>{name1}</p>
            <div className='stats_show'>
              <div>
                <div className="icon" id="icon5"></div>
                <p className='slideNr' id='smallTxt1'>{slider1}</p>
              </div>
              <div>
                <div className="icon" id="icon6"></div>
                <p className='slideNr' id='smallTxt2'>{slider2}</p>
              </div>
              <div>
                <div className="icon" id="icon7"></div>
                <p className='slideNr' id='smallTxt3'>{slider3}</p>
              </div>
              <div>
                <div className="icon" id="icon8"></div>
                <p className='slideNr' id='smallTxt4'>{health1}</p>
              </div>
            </div>
          </div>
          <div className='char_show'>
            <div className='showIMG' id={`showIMG${chImage2}`}></div>
            <p className="mainButton" id='movBright'>{name2}</p>
            <div className='stats_show'>
              <div>
                <div className="icon" id="icon5"></div>
                <p className='slideNr' id='smallTxt1'>{slider4}</p>
              </div>
              <div>
                <div className="icon" id="icon6"></div>
                <p className='slideNr' id='smallTxt2'>{slider5}</p>
              </div>
              <div>
                <div className="icon" id="icon7"></div>
                <p className='slideNr' id='smallTxt3'>{slider6}</p>
              </div>
              <div>
                <div className="icon" id="icon8"></div>
                <p className='slideNr' id='smallTxt4'>{health2}</p>
              </div>
            </div>
          </div>
          <div className='char_show'>
            <div className='showIMG' id={`showIMG${chImage3}`}></div>
            <p className="mainButton" id='movBright'>{name3}</p>
            <div className='stats_show'>
              <div>
                <div className="icon" id="icon5"></div>
                <p className='slideNr' id='smallTxt1'>{slider7}</p>
              </div>
              <div>
                <div className="icon" id="icon6"></div>
                <p className='slideNr' id='smallTxt2'>{slider8}</p>
              </div>
              <div>
                <div className="icon" id="icon7"></div>
                <p className='slideNr' id='smallTxt3'>{slider9}</p>
              </div>
              <div>
                <div className="icon" id="icon8"></div>
                <p className='slideNr' id='smallTxt4'>{health3}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='char_img' id='charSlots'>
          <button className='var_img' id={`showIMG${chImage1}`} onClick={() => changeChar(0)}></button>
          <button className='var_img' id={`showIMG${chImage2}`} onClick={() => changeChar(1)}></button>
          <button className='var_img' id={`showIMG${chImage3}`} onClick={() => changeChar(2)}></button>
        </div>
      </div>
      <div className={`saveWindow ${savetxt}`}>
        <p className={`title ${savetxtF}`} id="red">Failed Save</p>
        <p className={`mainButton ${savetxtF}`} id="txtsave"> Complete the character creation!</p>
        <p className={`title ${savetxtS}`} id="green">Successful Save</p>
        <button className="button" id="save" onClick={closeWin}>{saveMsg}</button>
      </div>
    </div>
  );
};

export default CharCreation;


// eslint-disable-next-line no-lone-blocks
{/* 
<div className="typeSelector_cont">
  <div className="slide_cont" style={{ '--slideType': `${slideValue}%` }}>
    <div className="type_cont">Archer</div>
    <div className="type_cont">Cleric</div>
    <div className="type_cont">Knight</div>
    <div className="type_cont">Wizard</div>
  </div>
</div> 
          
*/}