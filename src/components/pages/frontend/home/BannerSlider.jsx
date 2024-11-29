import React from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  
  
  return (
    <section className="banner-slider">
    <Slider {...settings} >
      <SliderItem img="slider-1.jpg" header="GRAPHIC TEES CAPSULES" subheader="NEWDROP"/>
      <SliderItem img="slider-2.jpg" header="THE RIPSTOP PULL OVER" subheader="RESTOCK ALERT "/>
      <SliderItem img="slider-3.jpg" header="STITCHED FOOTBALL TRACKPANT" subheader="LIMITED EDITION ONLINE EXCUSIVE"/>
    </Slider>
    </section>
  );
};

export default BannerSlider;

