/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Page404 from './Page404';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import Home from './Home';
import CharCreation from './CharCreation';
import Campaign from './Campaign';
import GameOver from './GameOver';
import HeroesShow from './HeroesShow';
import WinPage from './WinPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/character" element={<CharCreation />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/heroes" element={<HeroesShow />} />
        <Route path="/win" element={<WinPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;