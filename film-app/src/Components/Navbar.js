import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './Stylesheets/Navbar.css'
import './Stylesheets/Logos.css'
import "@fontsource/black-han-sans"; 
import "@fontsource/baloo-2";

function Navbar() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav className="nav">
       <a className="CinemaniaLogoLayout">
          <span className="CinemaniaLogoTypography">CINEMANIA</span>
       </a>
        <a className='SignUpButtonLayout'>
          <button className = "SignUpButtonStyle SignUpTextTypography"onClick={() => navigateTo("/signup")} type="button">
            Sign Up
          </button>
        </a>
        <a className='LoginTextLayout'>
          <button className='LoginTextTypography TransparentButton' onClick={() => navigateTo("/login")} type="button">
            Login
          </button>
        </a>
    </nav>
  );
}

export default Navbar;
