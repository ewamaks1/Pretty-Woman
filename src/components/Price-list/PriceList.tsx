import "./PriceList.css";
import React, { useState } from "react";
import { PriceData } from "../Interfaces/Interfaces";

const priceData: PriceData = {
  cosmetology: [
    { name: "Manualne oczyszczanie twarzy", price: "220zł", time: "75min" },
    {
      name: "Manualne oczyszczanie twarzy + peeling kawitacyjny",
      price: "250zł",
      time: "90min",
    },
    { name: "Peeling kawitacyjny z sonoforezą", price: "200zł", time: "45min" },
    { name: "Mikrodermabrazja diamentowa", price: "200zł", time: "45min" },
    { name: "Mikrodermabrazja + oczyszczanie", price: "300zł", time: "75min" },
  ],
  manicure: [
    { name: "Malowanie paznokci hybrydowe", price: "60zł", time: "30min" },
    {
      name: "Malowanie paznokci hybrydowe french",
      price: "80zł",
      time: "30min",
    },
    {
      name: "Malowanie hybrydowe + opiłowanie paznokci",
      price: "75zł",
      time: "40min",
    },
    {
      name: "Malowanie hybrydowe french + opiłowanie paznokci",
      price: "95zł",
      time: "40min",
    },
    {
      name: "Manicure hybrydowy + wzorki",
      price: "od 140 zł do 200 zł",
      time: "90min",
    },
  ],
  lashes: [
    { name: "Przedłużanie rzęs metodą 1:1", price: "200zł", time: "150min" },
    { name: "Przedłużanie rzęs metodą 2:1", price: "220zł", time: "150min" },
    { name: "Przedłużanie rzęs metodą 3:1", price: "240zł", time: "150min" },
    { name: "Przedłużanie rzęs metodą 4:1", price: "280zł", time: "150min" },
    {
      name: "Uzupełnienie rzęs metodą 1:1/2:1/3:1",
      price: "od 50zł",
      time: "30min",
    },
    { name: "Zdjęcie rzęs", price: "170 / 190 / 210 zł", time: "90min" },
  ],
  epilation: [
    { name: "Górna warga", price: "150zł", time: "15min" },
    { name: "Pachy", price: "200zł", time: "30min" },
    { name: "Całe ręce", price: "300zł", time: "30min" },
    { name: "Bikini", price: "300zł", time: "30min" },
    { name: "Łydki", price: "250zł", time: "30min" },
  ],
  tanning: [
    { name: "Opalanie natryskowe całe ciało", price: "135zł", time: "30min" },
    { name: "Opalanie połowa ciała", price: "80zł", time: "20min" },
    { name: "Opalanie twarz, szyja, dekolt", price: "60zł", time: "20min" },
  ],
  cryolipolysis: [
    { name: "Podbródek", price: "500zł", time: "30min" },
    { name: "Brzuch - 1 głowica", price: "650zł", time: "60min" },
    { name: "Brzuch - 2 głowice", price: "1000zł", time: "60min" },
    { name: "Boczki (dolna część pleców)", price: "1000zł", time: "60min" },
    { name: "Uda - wewnętrzna część", price: "1000zł", time: "60min" },
    { name: "Uda - zewnętrzna część", price: "1000zł", time: "60min" },
  ],
  hairdressing: [
    { name: "Warkoczyki box braids", price: "600zł", time: "4h" },
    { name: "Afroloki", price: "750zł", time: "5h" },
    { name: "Afrofale", price: "850zł", time: "5h" },
  ],
};

const PriceList: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState<string>("cosmetology");

  const handleSelectPrice = (price: string) => {
    setSelectedPrice(price);
  };
  return (
    <div className="price-list-container">
      <div className="price-list">
        {Object.keys(priceData).map((priceType) => (
          <button
            key={priceType}
            className={`btn ${selectedPrice === priceType ? "active" : ""}`}
            onClick={() => handleSelectPrice(priceType)}
          >
            {`Cennik ${priceType}`}
          </button>
        ))}
      </div>
      <div className="price-details">
        {selectedPrice && (
          <div className="selected-price">
            <h1 className="price-title">{selectedPrice.toUpperCase()}</h1>
            {priceData[selectedPrice].map((item, index) => (
              <div className="price-description" key={index}>
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
                <div className="time">{item.time}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceList;
