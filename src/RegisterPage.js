// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import users from "./DataBase";
import axiosInstance from "./axios";

const RegisterPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsg2, setErrorMsg2] = useState('');
  const [animationClass, setAnimationClass] = useState('');
  useEffect(() => {
    setTimeout(()=>{setAnimationClass('appear reg hide');},0)
    setTimeout(()=>{setAnimationClass('appear reg show');},250)
  }, []);

  const navigate = useNavigate();
  const gotologin = async(event) =>{
    event.preventDefault();
    setAnimationClass('goback reg hide');
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate("/login");
  }

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, repassword } = formData;
    if (!username || !password || !repassword) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (password !== repassword) {
      setErrorMsg("");
      setErrorMsg2("The passwords don't match.");
    } else {
      setErrorMsg("");
      setErrorMsg2("");

      try {
        const response = await axiosInstance.post('auth/register', {username, password})
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          sessionStorage.setItem('username', response.data.username)
          if (sessionStorage.getItem('characters')) {
              sessionStorage.removeItem('characters');}
          navigate("/home")
        } else {
          setErrorMsg("Invalid credentials");
        }
      } catch (e) {
        console.log(e);
        setErrorMsg("User already exist");
      }
    }
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
      <form className={`login_cont ${animationClass}`} onSubmit={handleSubmit}>
        Register
           <p className="message">{errorMsg}</p>
          <div className="input_cont">
            <div className='icon' id='icon1'></div>
            <input className="inp" type="text" placeholder="Type your username" autoComplete="off" name="username" value={formData.username} onChange={handleChange}/>
          </div>
          <div className="input_cont">
            <div className='icon' id='icon2'></div>
            <input className="inp" type="password" placeholder="Type your password" name="password" value={formData.password} onChange={handleChange}/>
          </div>
          <p className="message">{errorMsg2}</p>
          <div className="input_cont">
            <div className='icon' id='icon3'></div>
            <input className="inp" type="password" placeholder="Rewrite your password" name="repassword" value={formData.repassword} onChange={handleChange}/>
          </div>
          <button className="button" type="submit">Sign Up</button>
          <button className='text_but' onClick={gotologin}>Have an account already? Login!</button>
      </form>
    </div>
  )
}

export default RegisterPage;
