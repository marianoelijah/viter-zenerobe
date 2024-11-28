import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "./CardItem";

const NewArrival = () => {
  const [isHover, setIsHover] = React.useState(false);
  const newArrivalArray = [
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "Portfolio Lounge Tee Vintage White",
      price: "499.99",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "Stitched Football Trackpant Indigo",
      price: "149.99",
    },
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "Creators Club Lounge Tee Forest",
      price: "199.99",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "Creators Club Lounge Tee Vintage White",
      price: "1499.99",
    },
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "Beyond Borders Box Tee Black",
      price: "1499423.99",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section className="new-arrival py-10 ">
      <div className="container">
        <Slider {...settings}>
          {newArrivalArray.map((item, key) => (
            <CardItem item ={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewArrival;