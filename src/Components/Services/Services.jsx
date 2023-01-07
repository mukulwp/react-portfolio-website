import React from 'react';
import './Services.css';
import Card from '../ServicesCard/Card'
import HeartEmoji from '../../images/heartemoji.png';
import Glasses from '../../images/glasses.png';
import Humble from '../../images/humble.png';

import { themeContext } from "../../Context";
import { useContext } from "react";

import { motion } from "framer-motion";

function Services() {

  const transition = {duration: 2, type: 'spring'}

   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services"  id="services" >
      
      <div className="section-intro">
              <span className={darkMode ? 'darkColor' : ''}>My Awesome</span>
              <span>Services</span>
              <span className={darkMode ? 'darkColor' : ''}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus sunt culpa quae. Ex, vero.</span>
              <button className="btn s-btn">Download CV</button>
              <div className="blur s-blur"></div>
          </div>
      
      <div className="services-right">
        <div className="cards">
          <motion.div
            initial={{ left: '25rem' }}
            whileInView={{ left: '14rem' }}
            transition={transition}
            className="s-card1">
          <Card img={HeartEmoji} heading="Design" desc="Figma, Sketch, Photoshop, Adobe, Adobe xd." />
          </motion.div>
          <motion.div
            initial={{ left: '-15rem' }}
            whileInView={{ left: '-6rem' }}
            transition={transition}
            className="s-card2">
          <Card img={Glasses} heading="Developer" desc="HTML, CSS, JavaScript, React." />
          </motion.div>
          <motion.div
            initial={{ top: '32rem' }}
            whileInView={{ top: '22rem' }}
            transition={transition}
            className="s-card3">
          <Card img={Humble} heading="UI/UX" desc="Figma, Sketch, Photoshop, Adobe." />
        </motion.div>
        </div>
      </div>
      <div className="blur s-blur2"></div>
    </div>
  )
}

export default Services