import React from 'react';
import './Experience.css';

import { themeContext } from "../../Context";
import { useContext } from "react";

function Experience() {

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

  return (
      <div id='experience' className='experience'>
          <div className="achievement">
              <div className="circle">8+</div>
              <span className={darkMode ? 'darkColor' : ''}>Years</span>
              <span>Experience</span>
          </div>
          <div className="achievement">
              <div className="circle">58+</div>
              <span className={darkMode ? 'darkColor' : ''}>Completed</span>
              <span>Projects</span>
          </div>
          <div className="achievement">
              <div className="circle">35+</div>
              <span className={darkMode ? 'darkColor' : ''}>Clients</span>
              <span>Work</span>
          </div>
    </div>
  )
}

export default Experience