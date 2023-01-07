import React from 'react';
import './Footer.css';

import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

import { themeContext } from "../../Context";
import { useContext } from "react";

function Footer() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <footer className="footer"
          style={{
        background: darkMode ? "#152238" : "",
        color: darkMode ? "white" : "",
      }}
      >
          <div className="custom-shape-divider-top-1672900035">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill" style={{fill: darkMode ? "#152238" : ''}}></path>
              </svg>
              
          </div>
          <div className="footer-content">
              <span>mukulwp99@gmail.com</span>
              <div className="f-icons">
                 <a href="#"> <Insta size={'3rem'} /></a>
                  <a href="#"> <Facebook size={'3rem'} /></a>
                  <a href="#"> <Github size={'3rem'} /></a>
              </div>
          </div>
    </footer>
  )
}

export default Footer