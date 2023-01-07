import React from 'react';
import './FloatingDiv.css';

function FloatingDiv({img, txt1, txt2}) {
  return (
      <div className="floatingdiv">
          <img src={img} alt="Crown" /> 
          <span>
              {txt1}
              <br />
              {txt2}
          </span>
    </div>
  )
}

export default FloatingDiv