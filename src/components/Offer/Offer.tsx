import "./Offer.css";
import "typeface-courgette";
import React, { useState } from "react";
import Face from "../Face/Face";
import Hands from "../Hands/Hands";
import Lashes from "../Lashes/Lashes";
import Epilation from "../Epilation/Epilation";
import Tanned from "../Tanned/Tanned";
import Cryotherapy from "../Cryotherapy/Cryotherapy";
import Hair from "../Hair/Hair";
import { FunctionComponent as FC } from "react";

const Offer: React.FC = () => {
  const [category, setCategory] = useState<string>("all");

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const categoryLabels: Record<string, string> = {
    all: "Wszystkie",
    face: "Pielęgnacja twarzy",
    hands: "Pielęgnacja dłoni",
    lashes: "Stylizacja rzęs",
    epilation: "Depilacja",
    tanned: "Opalanie natryskowe",
    cryotherapy: "Kriopoliza",
    hair: "Usługi fryzjerskie",
  };

  const categoryComponents: Record<string, FC[]> = {
    all: [Face, Hands, Lashes, Epilation, Tanned, Cryotherapy, Hair],
    face: [Face],
    hands: [Hands],
    lashes: [Lashes],
    epilation: [Epilation],
    tanned: [Tanned],
    cryotherapy: [Cryotherapy],
    hair: [Hair],
  };

  return (
    <div className="offer-page">
      <div className="offer-container">
        <h1
          className="offer-title"
          style={{ fontFamily: "Courgette, cursive" }}
        >
          Usługi kosmetyczne
        </h1>
      </div>
      <div className="offer-navbar">
        {Object.keys(categoryLabels).map((cat) => (
          <button
            key={cat}
            className="offer-btn"
            onClick={() => handleCategoryChange(cat)}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>
      <div className="offer-list">
        {categoryComponents[category].map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
