import React from 'react';
import './Card.css';

import { themeContext } from "../../Context";
import { useContext } from "react";

function Card(props) {

   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const { img, heading, desc } = props;
  return (
      <div className="card">
          <img src={img} alt="HeartEmoji" />
          <h3 className={darkMode ? 'darkColor' : ''}>{heading}</h3>
          <span className={darkMode ? 'darkColor' : ''}>{desc}</span>
          <button className="card-btn">Learn More</button>
    </div>
  )
}

export default Card