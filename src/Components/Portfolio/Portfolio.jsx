import React from 'react';
import './Portfolio.css';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Sidebar from '../../images/sidebar.png';
import Ecommerce from '../../images/ecommerce.png';
import Hoc from '../../images/hoc.png';
import MusicApp from '../../images/musicapp.png';

import { themeContext } from "../../Context";
import { useContext } from "react";

function Portfolio() {

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

  return (
      <div className='portfolio' id='portfolio'>
          <h2><p className={darkMode ? 'darkColor' : ''}>Recent Projects</p> <span>Portfolio</span></h2>

          {/* {Slider} */}
          <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
          >
              <SwiperSlide>
                  <img src={ Sidebar } alt="Sidebar" />
              </SwiperSlide>
               <SwiperSlide>
                  <img src={ Ecommerce } alt="Ecommerce" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={ Hoc } alt="Hoc" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={ MusicApp } alt="MusicApp" />
              </SwiperSlide>
          </Swiper>

           {/* {Mobile Slider} */}
          <Swiper
             modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          "delay": 5500
        }}
              className="m-portfolio-slider"
          >
              <SwiperSlide>
                  <img src={ Sidebar } alt="Sidebar" />
              </SwiperSlide>
               <SwiperSlide>
                  <img src={ Ecommerce } alt="Ecommerce" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={ Hoc } alt="Hoc" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={ MusicApp } alt="MusicApp" />
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default Portfolio