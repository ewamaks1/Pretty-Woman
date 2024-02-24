import "./Face.css";
import mask from "../../images/premium_photo-1661404164814-9d3c137097aa.avif";
import React from "react";

const Face: React.FC = () => {
  return (
    <div>
      <div className="single-offer">
        <img src={mask} className="offer-photo" alt="Facial care image"></img>
        <div className="offer-details">
          <h1>ZABIEGI PIELĘGNACYJNE</h1>
          <p>Różne zabiegi pielęgnacyjne</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Face;
