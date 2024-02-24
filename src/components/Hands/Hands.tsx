import "./Hands.css";
import nails from "../../images/photo-1587729927069-ef3b7a5ab9b4.jpg";
import React from "react";

const Hands: React.FC = () => {
  return (
    <div>
      <div className="single-offer">
        <img src={nails} className="offer-photo" alt="Nails image"></img>
        <div className="offer-details">
          <h1>MANICURE HYBRYDOWY</h1>
          <p>Różne wzorki</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Hands;
