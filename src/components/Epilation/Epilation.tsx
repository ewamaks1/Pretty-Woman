import "./Epilation.css";
import epilation from "../../images/depil.avif";
import React from "react";

const Epilation: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="single-offer">
        <img
          src={epilation}
          className="offer-photo"
          alt="Epilation image"
        ></img>
        <div className="offer-details">
          <h1>DEPILACJA LASEROWA</h1>
          <p>Depilacja różnych części ciała</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Epilation;
