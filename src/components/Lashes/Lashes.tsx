import "./Lashes.css";
import lashes from "../../images/hayley-kim-studios-sRSRuxkOuzI-unsplash.jpg";
import React from "react";

const Lashes: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="single-offer">
        <img src={lashes} className="offer-photo" alt="Lashes image"></img>
        <div className="offer-details">
          <h1>STYLIZACJA RZĘS</h1>
          <p>Przedłużanie rzęs różnymi metodami</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Lashes;
