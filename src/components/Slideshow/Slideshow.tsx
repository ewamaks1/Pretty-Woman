import { useState, useEffect } from "react";
import photo1 from "../../images/alex-bierwagen-sw_yLx362yM-unsplash.jpg";
import photo2 from "../../images/content-pixie-TxBQ7yLj6JU-unsplash.jpg";
import photo3 from "../../images/content-pixie-WdJ4WnLxyDs-unsplash.jpg";
import photo4 from "../../images/joanna-kosinska-ToV0rS9nTYs-unsplash.jpg";
import photo5 from "../../images/pmv-chamara-dMjkQJs58uo-unsplash.jpg";
import photo6 from "../../images/rosa-rafael-Pe9IXUuC6QU-unsplash.jpg";
import photo7 from "../../images/uby-yanes-hopBXVvcw6k-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { URL_map } from "../Constants/Constants";
import styles from "./Slideshow.module.css";

const photos: string[] = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
];

const Slideshow: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo;
    });
  }, []);

  const [backgroundImage, setBackgroundImage] = useState<string>(photos[0]);

  useEffect(() => {
    let currentIndex: number = 0;

    const changeBackgroundImage = () => {
      currentIndex = (currentIndex + 1) % photos.length;
      setBackgroundImage(photos[currentIndex]);
    };

    const interval = setInterval(changeBackgroundImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [photos]);

  const openMapInNewWindow = () => {
    const mapUrl: string = URL_map;
    window.open(mapUrl, "_blank");
  };

  return (
    <>
      <div
        className={styles["slideshow-container"]}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.6,
          transition: "background-image 1s ease-in-out",
        }}
      >
        {" "}
        <div className={styles["main-page-container"]}>
          <div className={styles["main-page-title"]}>
            <h1>Salon kosmetyczny Pretty Woman by Justyna Łobodzińska</h1>
          </div>
          <div className={styles["main-page-info"]}>
            <button className={styles.btn} onClick={() => navigate("/offer")}>
              <span> OFERTA</span>
              <span className={styles.sign}>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
            <button className={styles.btn} onClick={() => navigate("/contact")}>
              <span>UMÓW WIZYTĘ</span>
              <span className={styles.sign}>
                <FontAwesomeIcon icon={faPhone} />
              </span>
            </button>
            <button className={styles.btn} onClick={openMapInNewWindow}>
              <span> MAPA DOJAZDU</span>
              <span className={styles.sign}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
