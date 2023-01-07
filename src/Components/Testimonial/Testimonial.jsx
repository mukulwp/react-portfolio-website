import React from 'react';
import './Testimonial.css';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import profilePic1 from '../../images/profile1.jpg';
import profilePic2 from '../../images/profile2.jpg';
import profilePic3 from '../../images/profile3.jpg';
import profilePic4 from '../../images/profile4.jpg';
import profilePic5 from '../../images/profile5.jpg';
import profilePic6 from '../../images/profile6.jpg';

import { themeContext } from "../../Context";
import { useContext } from "react";

function Testimonial() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: profilePic1,
      imgAltText: "John Doe",
      clientName: "John Doe",
      review: "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed. Tap into the power of social media by sharing your Gig, and get expert help to grow your impact."
    },
    {
      img: profilePic2,
      imgAltText: "John Milton",
      clientName: "John Milton",
      review: "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed. Tap into the power of social media by sharing your Gig, and get expert help to grow your impact."
    },
    {
      img: profilePic3,
      imgAltText: "William Porter",
      clientName: "William Porter",
      review: "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed. Tap into the power of social media by sharing your Gig, and get expert help to grow your impact."
    },
    {
      img: profilePic4,
      imgAltText: "Heather",
      clientName: "Heather",
      review: "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed. Tap into the power of social media by sharing your Gig, and get expert help to grow your impact."
    },
    {
      img: profilePic5,
      imgAltText: "Xenon Doe",
      clientName: "Xenon Doe",
      review: "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed. Tap into the power of social media by sharing your Gig, and get expert help to grow your impact."
    },
    {
      img: profilePic6,
      imgAltText: "John Dane",
      clientName: "John Dane",
      review: "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed. Tap into the power of social media by sharing your Gig, and get expert help to grow your impact."
    },
  ]
  return (
    <div className='testimonials' id='testimonials'>
          <h2 className={darkMode ? 'darkColor' : ''}>Clients always get <span>Exceptional Work</span> from me...</h2>
          <div className="blur t-blur1"></div>
      <div className="blur t-blur2"></div>

      {/* {Testimonial Slider } */}
      
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          "delay": 5500
        }}
        className="testimonial-slider"
      >
        {clients.map((client, index) => {
          const { img, imgAltText, clientName, review } = client;
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                 <img src={img} alt={imgAltText} />
              <span style={{color: darkMode ? 'white' : ''}} className='client-name'>{clientName}</span>
              <span style={{color: darkMode ? 'white' : ''}}>{review}</span>
             </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
          </div>
  )
}

export default Testimonial