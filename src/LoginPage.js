/* eslint-disable no-unused-vars */
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import users from "./DataBase";
import axiosInstance from "./axios";

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const handleClick = async (event) => {
    event.preventDefault();
    const answerDivs = document.querySelector('.login_cont');
    answerDivs.classList.add('dissapear');
    answerDivs.classList.add('hide');
    await new Promise((resolve) => setTimeout(resolve, 250));
    navigate("/register");
  }

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { username, password } = formData;

    try {
      const response = await axiosInstance.post('auth/login', {name:username, password})
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        sessionStorage.setItem('username', response.data.username)
        const characters = await axiosInstance.get('character')

      if(characters.data.length!==0){
        const charactersSession = [
          {
              name: characters.data[characters.data.length - 3].name,
              health: characters.data[characters.data.length - 3].health,
              strength: characters.data[characters.data.length - 3].damage,
              agility: characters.data[characters.data.length - 3].agility,
              intelligence: characters.data[characters.data.length - 3].intelligence,
              image: characters.data[characters.data.length - 3].image
          },
          {
              name: characters.data[characters.data.length - 2].name,
              health: characters.data[characters.data.length - 2].health,
              strength: characters.data[characters.data.length - 2].damage,
              agility: characters.data[characters.data.length - 2].agility,
              intelligence: characters.data[characters.data.length - 2].intelligence,
              image: characters.data[characters.data.length - 2].image
          },
          {
              name: characters.data[characters.data.length - 1].name,
              health: characters.data[characters.data.length - 1].health,
              strength: characters.data[characters.data.length - 1].damage,
              agility: characters.data[characters.data.length - 1].agility,
              intelligence: characters.data[characters.data.length - 1].intelligence,
              image: characters.data[characters.data.length - 1].image
          }
      ];

      sessionStorage.setItem('characters', JSON.stringify(charactersSession));
      console.log(JSON.stringify(charactersSession))
      console.log("SESION FULL")
    }else{
      if (sessionStorage.getItem('characters')) {
        sessionStorage.removeItem('characters');}
        console.log("SESION EMPTY")
    }

        navigate("/home")
      } else {
        setErrorMsg("Invalid credentials");
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Invalid credentials");
    }

    
    // const user = users.find((element) => element.username === username);
    // if (!user) {
    //   setErrorMsg("The inserted data is incorrect.");
    // } else {
    //   if (password === user.password) {
    //     navigate("/home");
    //     sessionStorage.setItem("username", user.username); 
    //   } else {
    //   }
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="main">
      <form className="login_cont" onSubmit={handleSubmit}>
        Login
          <p className="message">{errorMsg}</p>
          <div className="input_cont">
            <div className='icon' id='icon1'></div>
            <input className="inp"autoComplete="off" type="text" placeholder="Type your username" name="username" value={formData.username} onChange={handleChange}/>
          </div>
          <div className="input_cont">
            <div className='icon' id='icon2'></div>
            <input className="inp" type="password" placeholder="Type your password" name="password" value={formData.password} onChange={handleChange}/>
          </div>
          <button className='text_but' onClick={handleClick}>Don't have an account yet? Register now!</button>
          <button className="button" type="submit">Login</button>
      </form>
      </div>
  )
}

export default LoginPage;
