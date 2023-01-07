import React from 'react';
import './Toggle.css';

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Toggle() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleToggle = () => {
        theme.dispatch({ type: 'toggle' });
    }

  return (
      <div className={darkMode ? 'darkToggle toggle' : 'toggle'} onClick={handleToggle}>
          <Sun />
          <Moon />
      <div className={darkMode ? 'darkColor toggle-btn' : 'toggle-btn'} style={darkMode ?  {right: '2px'} : {left: '2px'}}></div>
    </div>
  )
}

export default Toggle