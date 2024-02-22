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
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="small-image" src={gallery1} alt="" />
        </div>
        <div>
          <img className="small-image" src={gallery2} alt="" />
        </div>
        <div>
          <img className="small-image" src={gallery3} alt="" />
        </div>
        <div>
          <img className="small-image" src={gallery4} alt="" />
        </div>
        <div>
          <img className="small-image" src={gallery5} alt="" />
        </div>
        <div>
          <img className="small-image" src={gallery6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
