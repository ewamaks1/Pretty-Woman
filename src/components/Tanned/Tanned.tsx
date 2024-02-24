import "./Tanned.css";
import tanned from "../../images/tanned.avif";
import React from "react";

const Tanned: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="single-offer">
        <img src={tanned} className="offer-photo" alt="Tanned image"></img>
        <div className="offer-details">
          <h1>OPALANIE NATRYSKOWE</h1>
          <p>Opalanie</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Tanned;
