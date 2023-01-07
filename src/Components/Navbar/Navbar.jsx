import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from 'react-scroll';
import Hamburger from '@iconscout/react-unicons/icons/uil-bars';
import Times from '@iconscout/react-unicons/icons/uil-times';

function Navbar() {

   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [mobileMenu, setMobileMenu] = useState(false);

  // const handleMobileMenu = () => {
  //   setMobileMenu(true);
  // }

  return (
    <nav className="nav"
      style={{
        background: darkMode ? "#152238" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-brand">
            <Link spy={true} to='home' smooth={true} className={darkMode ? 'darkColor' : ''} >M<span>uk</span>ul</Link>
          </div>
         <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            
            <ul className={mobileMenu ? 'activeNav' : ''}>
              <li>
                <Link spy={true} to='home' activeClass="active" smooth={true} className={darkMode ? 'darkColor' : ''}>Home</Link>
              </li>
              <li>
                <Link spy={true} to='services'  smooth={true} className={darkMode ? 'darkColor' : ''}>Services</Link>
              </li>
              <li>
                <Link spy={true} to='experience' smooth={true} className={darkMode ? 'darkColor' : ''}>Experience</Link>
              </li>
              <li>
                <Link spy={true} to='portfolio' smooth={true} className={darkMode ? 'darkColor' : ''}>Portfolio</Link>
              </li>
              <li>
                <Link spy={true} to='testimonial' smooth={true} className={darkMode ? 'darkColor' : ''}>Testimonials</Link>
              </li>
            </ul>
            <div className="hamburger-icon mobile-menu-icon" onClick={() => {
              setMobileMenu(!mobileMenu)
            }}>
            {mobileMenu ? <Times /> : <Hamburger />}
            </div>
            {/* <div className="times-icon mobile-menu-icon" onClick={() => {
              setMobileMenu(!mobileMenu)
            }}> */}
  
          </div>
          <Link spy={true} to='contact' smooth={true} activeClass="none" className="btn n-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
