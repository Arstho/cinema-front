import React, { useEffect } from 'react';
import Swiper, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

Swiper.use([Navigation, Autoplay]);

const PosterSlider = ({ posters }) => {
    

  useEffect(() => {
    const mySwiper = new Swiper('.poster-slider', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: false,
      speed: 1000,
      grabCursor: false,
      freeMode: true,
      loopedSlides: 1,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      autoplay: {
        delay: 3000, // время между прокрутками в миллисекундах
        disableOnInteraction: false, // автоматическая прокрутка не останавливается, если пользователь взаимодействует со слайдером
      },
    });
  }, []);

  return (
    <div className="poster-slider swiper-container" style={{overflow: 'hidden'}}>
      <div className="swiper-wrapper" style={{marginBottom: '50px'}}>
        {posters.map((poster, index) => (
          <div key={index} className="swiper-slide">
            <img src={poster.imageUrl} alt={poster.title} style={{height: '500px'}}/>
          </div>
        ))}
      </div>
      <div className="swiper-button-prev" style={{color: "white"}}></div>
      <div className="swiper-button-next" style={{color: "white"}}></div>
    </div>
  );
};

export default PosterSlider;



