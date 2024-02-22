import "./Reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews: React.FC = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className="reviews-page">
      <div className="reviews-container">
        <div className="reviews-entry">
          <h1 className="reviews-entry-title">Opinie klientów</h1>
          <p className="reviews-entry-description">
            Dziękuję serdecznie za każdą Waszą opinię, to dla mnie ważna
            wskazówka w jakim kierunku mam się rozwijać.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="opinion">
              <h1 className="opinion-title">Karolina N.</h1>
              <p className="opinion-description">
                Najlepszy relaks jaki można sobie wyobazić! Na pewno jeszcze
                wrócę!
              </p>
            </div>
            <div className="opinion">
              <h1 className="opinion-title">Magda P.</h1>
              <p className="opinion-description">
                Super! Najlepszy salon w Białymatoku :) polecam wszystkim!
              </p>
            </div>
            <div className="opinion">
              <h1 className="opinion-title">Justyna</h1>
              <p className="opinion-description">
                Paznokcie super wykonane w miłej atmosferze :)
              </p>
            </div>
            <div className="opinion">
              <h1 className="opinion-title">Agnieszka</h1>
              <p className="opinion-description">
                Jestem zachwycona efektem opalania natryskowego! Polecam każdemu
                :)
              </p>
            </div>
            <div className="opinion">
              <h1 className="opinion-title">Dorota</h1>
              <p className="opinion-description">
                Wow!! Nigdy w życiu nie miałam takiej fryzury, coś niesamwitego!
                Wrócę jeszcze nie raz :))
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
