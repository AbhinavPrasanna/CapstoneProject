import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
       </Routes>
    </Router>
  );
}

export default App;
