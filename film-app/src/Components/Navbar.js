import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';
import {auth} from '../utils/Firebase.js';
import {getAuth, signOut} from 'firebase/auth';

import './Stylesheets/Navbar.css'
import './Stylesheets/Logos.css'
import "@fontsource/black-han-sans"; 
import "@fontsource/baloo-2";

function Navbar() {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, authUsers, setAuthUsers} = useAuth();
  const navigateTo = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setAuthUser(null);
      setIsLoggedIn(false);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <nav className="nav">
       <a className="CinemaniaLogoLayout">
          <span className="CinemaniaLogoTypography">CINEMANIA</span>
       </a>
        <a className='SignUpButtonLayout'>
          {
           isLoggedIn
           ?
           <button className = "SignUpButtonStyle SignUpTextTypography" onClick={handleLogout} type="button">
              Logout
            </button>
           :
          <button className = "SignUpButtonStyle SignUpTextTypography"onClick={() => navigateTo("/signup")} type="button">
            Sign Up
          </button>
          }
        </a>
        <a className='LoginTextLayout'>
          {
            isLoggedIn
            ?
            <img className = 'ImageLayout ImageStyle' src = 'http://abhinav-capstoneproject-images.s3-website.us-east-2.amazonaws.com/abhinavprasannabigimage.JPG'></img>
            :
          <button className='LoginTextTypography TransparentButton' onClick={() => navigateTo("/login")} type="button">
            Login
          </button>
          }
        </a>
    </nav>
  );
}

export default Navbar;
