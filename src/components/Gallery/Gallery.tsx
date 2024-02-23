import "./Gallery.css";
import React from "react";
import gallery1 from "../../images/gallery/gallery1.jpg";
import gallery2 from "../../images/gallery/gallery2.jpg";
import gallery3 from "../../images/gallery/gallery3.jpg";
import gallery4 from "../../images/gallery/gallery4.jpg";
import gallery5 from "../../images/gallery/gallery5.jpg";
import gallery6 from "../../images/gallery/gallery6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery: React.FC = () => {
  const images: string[] = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    centerMode: false,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-container">
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} className="image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
