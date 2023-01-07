import React, {useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Loading from '../../images/loading.gif';

import { themeContext } from "../../Context";
import { useContext } from "react";

const loadingMessage = <img src={Loading} alt="Loading" />;

function Contact() {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const [done, setDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const theRef1 = useRef();
    const theRef2 = useRef();
    const theRef3 = useRef();
    
     const sendEmail = (e) => {
         e.preventDefault();
         setIsLoading(true)

    emailjs.sendForm('service_3ui07el', 'template_r5u60jn', form.current, 'omT9Z7NL6fpLHAS2d')
        .then((e) => {
            theRef1.current.value = '';
            theRef2.current.value = '';
            theRef3.current.value = '';
          setDone(true);
          setTimeout(function () {
              setDone(false);
          }, 3000);
          setIsLoading(false);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="contact" id="contact">
          <div className="section-intro">
              <span className={darkMode ? 'darkColor' : ''}>Get In Touch</span>
              <span>Contact</span>
              <span className={darkMode ? 'darkColor' : ''}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Possimus accusamus sunt culpa quae. Ex, vero.</span>
              <div className="blur contact-blur"></div>
          </div>
          <div className="contact-right">
              
              <form ref={form} onSubmit={sendEmail}>
                  <input ref={theRef1} type="text" name='fullName' className='contact-form' placeholder='Name' required/>
                  <input ref={theRef2} type="text" name='email' className='contact-form' placeholder='Email' required/>
                  <textarea ref={theRef3} rows='5' type="text" name='message' className='contact-form' placeholder='Message' ></textarea>
                  <div style={{display: isLoading && 'block'}} className="contact-loading">
                  {isLoading && loadingMessage}
                  </div>
                  <span style={{display: done && 'block', color: "green"}}>{ done && "Thanks for contacting me!" }</span>
                  <input type="submit" value="Send" className="btn" />
                  
              </form>
          </div>
    </div>
  )
}

export default Contact