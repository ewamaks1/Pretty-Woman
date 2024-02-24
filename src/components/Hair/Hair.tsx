import "./Hair.css";
import hair from "../../images/hair.jpg";
import React from "react";

const Hair: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="single-offer">
        <img src={hair} className="offer-photo" alt="Hair image"></img>
        <div className="offer-details">
          <h1>WARKOCZE</h1>
          <p>Warkocze plecione</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Hair;
