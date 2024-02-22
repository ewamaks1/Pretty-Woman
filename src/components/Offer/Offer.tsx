import "./Offer.css";
import "typeface-courgette";
import { useState } from "react";
import Face from "../Face/Face";
import Hands from "../Hands/Hands";
import Lashes from "../Lashes/Lashes";
import Epilation from "../Epilation/Epilation";
import Tanned from "../Tanned/Tanned";
import Cryotherapy from "../Cryotherapy/Cryotherapy";
import Hair from "../Hair/Hair";

const Offer = () => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
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
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("all")}
        >
          Wszystkie
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("face")}
        >
          Pielęgnacja twarzy
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("hands")}
        >
          Pielęgnacja dłoni
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("lashes")}
        >
          Stylizacja rzęs
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("epilation")}
        >
          Depilacja
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("tanned")}
        >
          Opalanie natryskowe
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("cryotherapy")}
        >
          Kriopoliza
        </button>
        <button
          className="offer-btn"
          onClick={() => handleCategoryChange("hair")}
        >
          Usługi fryzjerskie
        </button>
      </div>
      <div className="offer-list">
        {category === "all" && (
          <>
            <Face />
            <Hands />
            <Lashes />
            <Epilation />
            <Tanned />
            <Cryotherapy />
            <Hair />
          </>
        )}
        {category === "face" && <Face />}
        {category === "hands" && <Hands />}
        {category === "lashes" && <Lashes />}
        {category === "epilation" && <Epilation />}
        {category === "tanned" && <Tanned />}
        {category === "cryotherapy" && <Cryotherapy />}
        {category === "hair" && <Hair />}
      </div>
    </div>
  );
};

export default Offer;
