import React from 'react';
import './Works.css';
import Amazon from '../../images/amazon.png';
import Facebook from '../../images/Facebook.png';
import Fiverr from '../../images/fiverr.png';
import Shopify from '../../images/Shopify.png';
import Upwork from '../../images/Upwork.png';

import { themeContext } from "../../Context";
import { useContext } from "react";

import { motion } from "framer-motion";

function Works() {

    const transition = {duration: 3.5, type: 'spring'}

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

  return (
      <div className="works">
          <div className="section-intro works-intro">
              <span className={darkMode ? 'darkColor' : ''}>Works for All these</span>
              <span>Brands & Clients</span>
              <span className={darkMode ? 'darkColor' : ''}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus sunt culpa quae. Ex, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus sunt culpa quae. Ex, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus sunt culpa quae. Ex, vero.</span>
              <button className="btn s-btn">Hire Me</button>
              <div className="blur s-blur"></div>
          </div>
          {/* Right Side */}
          <div className="works-right">
              <motion.div
                  initial={{ rotate: 45 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{margin:'-40px'}}
                  transition={transition}
                  className="main-circle">
                  <div className="sec-circle">
                      <img src={Upwork} alt="Upwork" />
                  </div>
                   <div className="sec-circle">
                      <img src={Fiverr} alt="Fiverr" />
                  </div>
                   <div className="sec-circle">
                      <img src={Amazon} alt="Amazon" />
                  </div>
                   <div className="sec-circle">
                      <img src={Shopify} alt="Shopify" />
                  </div>
                   <div className="sec-circle">
                      <img src={Facebook} alt="Facebook" />
                  </div>
              </motion.div>
              <div className="back-circle blue-circle"></div>
              <div className="back-circle yellow-circle"></div>
          </div>
    </div>
  )
}

export default Works