import React, { useState, useEffect } from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
/*https://react-slick.neostack.com/docs/example/custom-slides/*/

import slide1 from  "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import { Link } from 'react-router-dom';

import ripBottom from '../../img/rip_bottom.png';

function SliderHome() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

  const slidesData = [
    {
      id: 1,
      image: slide1,
      title: 'It\'s Time for hiking',
      label: 'Let the ADVENTURE begins!',
      para: 'Hiking is an activity of moderate difficulty, which involves walking across long distances generally on trails or paths. ',
    }, {
      id: 2,
      image:  slide2,
      title: 'Hiking with benefits',
      label: 'Exercise with fullfillment',
      para: 'Going up and down hills gets the heart pumping, creating a great cardio workout. Like most cardio exercises',
    }, {
      id: 3,
      image: slide3,
      title: 'Hiking or trekking?',
      label: 'Get involved, energetic walk!',
      para: 'Hiking is a weight-bearing exercise, which builds muscle mass and helps prevent osteoporosis.',
    }, {
      id: 4,
      image: slide1,
      title: 'So, why hike?',
      label: 'The best way to get fit.',
      para: 'Hiking is a fun, relaxing way to experience the great outdoors with friends and family.',
    }, {
      id: 5,
      image: slide2,
      title: 'hiking a sport or a hobby?',
      label: 'Satisfaction guaranted',
      para: 'Hiking helps reduce your risk of heart disease, stroke, high blood pressure, high cholesterol and even some cancers',
    }, 
  ];

  return (

      <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <div className="slick-slide-image"><img src={slide.image} /></div>
              <div className="slick-slide-title"><h2>{slide.title}</h2></div>
              <div className="slick-slide-label"><label>{slide.label}</label></div>
              <div className="paragraph"><p>{slide.para}</p></div>
              <div className="slide-button"><Link to ="/about"><button>Read more</button></Link></div>
              <div className="rip-bottom"><img src={ripBottom} alt=''/></div>
            </div>

          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={slide.image} />
              </div>

            )}

          </Slider>
          
        </div>
        
      </div>
  );
}

export default SliderHome;