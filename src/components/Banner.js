import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../img/cocuk-giyim.webp';
import one2 from '../img/erkek-giyim.webp';
import one3 from '../img/kadin-giyim.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './banner.css';
// import '../styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
function Banner() {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><img src={one} className='s' /></SwiperSlide>
      <SwiperSlide><img src={one2} className='s'/></SwiperSlide>
      <SwiperSlide><img src={one3} className='s'/></SwiperSlide>
     
   
    </Swiper>
  </>
  )
}

export default Banner