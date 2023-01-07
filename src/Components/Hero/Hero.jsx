import React from "react";
import "./Hero.css";
import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Boy from "../../images/boy.png";
import Thumbup from "../../images/thumbup.png";
import GlassesEmoji from "../../images/glassesimoji.png";
import Crown from "../../images/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { useContext } from "react";

import { motion } from "framer-motion";

function Hero() {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="hero" id="home">
      <div className="hero-left">
        <div className="hero-left-content">
          <span className={darkMode ? 'darkColor' : ''}>Hey! I Am</span>
          <span>Mukul Hossain</span>
          <span className={darkMode ? 'darkColor' : ''}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </span>
          <button className="btn hero-btn">Hire Me</button>
          <div className="hero-icon">
            <a href="https://github.com/mukulwp">
              <img src={Github} alt="Github" />
            </a>
            <a href="htpps://linkedin.com/mukulwp">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://instagram.com/mukulwp">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        
          <img src={Vector1} alt="Vector1" />
          <img src={Vector2} alt="Vector2" />
          <img src={Boy} alt="Boy" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={GlassesEmoji} alt="GlassesEmoji" />
        
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '65%' }}
          transition={transition}
          className="floatingBox1">
          <FloatingDiv img={Crown} txt1="Web" txt2="Developer" />
              </motion.div>
        <motion.div
          initial={{ top: '18rem', left: '8rem' }}
          whileInView={{ left: '0' }}
          transition={transition}
          className="floatingBox2">
          <FloatingDiv img={Thumbup} txt1="Best Design" txt2="Award" />
              </motion.div>
              <div className="blur"></div>
              <div className="blur hero-blur"></div>
      </div>
    </div>
  );
}

export default Hero;
