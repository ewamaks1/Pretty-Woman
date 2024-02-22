import "./PriceList.css";
import { useState } from "react";

const PriceList = () => {
  const [selectedPrice, setSelectedPrice] = useState("cosmetology");

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
  };
  return (
    <div className="price-list-container">
      <div className="price-list">
        <button
          className={`btn ${selectedPrice === "cosmetology" ? "active" : ""}`}
          onClick={() => handleSelectPrice("cosmetology")}
        >
          Cennik kosmetyka twarzy
        </button>
        <button
          className={`btn ${selectedPrice === "manicure" ? "active" : ""}`}
          onClick={() => handleSelectPrice("manicure")}
        >
          Cennik manicure hybrydowy
        </button>
        <button
          className={`btn ${selectedPrice === "lashes" ? "active" : ""}`}
          onClick={() => handleSelectPrice("lashes")}
        >
          Cennik stylizacja rzęs
        </button>
        <button
          className={`btn ${selectedPrice === "epilation" ? "active" : ""}`}
          onClick={() => handleSelectPrice("epilation")}
        >
          Cennik depilacja laserowa
        </button>
        <button
          className={`btn ${selectedPrice === "tanning" ? "active" : ""}`}
          onClick={() => handleSelectPrice("tanning")}
        >
          Cennik opalanie natryskowe
        </button>
        <button
          className={`btn ${selectedPrice === "cryolipolysis" ? "active" : ""}`}
          onClick={() => handleSelectPrice("cryolipolysis")}
        >
          Cennik kriopoliza
        </button>
        <button
          className={`btn ${selectedPrice === "hairdressing" ? "active" : ""}`}
          onClick={() => handleSelectPrice("hairdressing")}
        >
          Cennik fryzjerstwo
        </button>
      </div>
      <div className="price-details">
        {selectedPrice && (
          <>
            {selectedPrice === "cosmetology" && (
              <div className="selected-price">
                <h1 className="price-title">KOSMETYKA</h1>
                <div className="price-description">
                  <div className="name">Manualne oczyszczanie twarzy</div>
                  <div className="price">220zł</div>
                  <div className="time">75min</div>
                </div>
                <div className="price-description">
                  <div className="name">
                    Manualne oczyszczanie twarzy + peeling kawitacyjny
                  </div>
                  <div className="price">250zł</div>
                  <div className="time">90min</div>
                </div>
                <div className="price-description">
                  <div className="name">Peeling kawitacyjny z sonoforezą</div>
                  <div className="price">200zł</div>
                  <div className="time">45min</div>
                </div>
                <div className="price-description">
                  <div className="name">Mikrodermabrazja diamentowa</div>
                  <div className="price">200zł</div>
                  <div className="time">45min</div>
                </div>
                <div className="price-description">
                  <div className="name">Mikrodermabrazja + oczyszczanie</div>
                  <div className="price">300zł</div>
                  <div className="time">75min</div>
                </div>
              </div>
            )}
            {selectedPrice === "manicure" && (
              <div className="selected-price">
                <h1 className="price-title">MANICURE HYBRYDOWY</h1>
                <div className="price-description">
                  <div className="name">Malowanie paznokci hybrydowe</div>
                  <div className="price">60zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">
                    Malowanie paznokci hybrydowe french
                  </div>
                  <div className="price">80zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">
                    Malowanie hybrydowe + opiłowanie paznokci
                  </div>
                  <div className="price">75zł</div>
                  <div className="time">40min</div>
                </div>
                <div className="price-description">
                  <div className="name">
                    Malowanie hybrydowe french + opiłowanie paznokci
                  </div>
                  <div className="price">95zł</div>
                  <div className="time">40min</div>
                </div>
                <div className="price-description">
                  <div className="name">Manicure hybrydowy + wzorki</div>
                  <div className="price">od 140 zł do 200 zł</div>
                  <div className="time">90min</div>
                </div>
              </div>
            )}
            {selectedPrice === "lashes" && (
              <div className="selected-price">
                <h1 className="price-title">STYLIZACJA RZĘS</h1>
                <div className="price-description">
                  <div className="name">Przedłużanie rzęs metodą 1:1</div>
                  <div className="price">200zł</div>
                  <div className="time">150min</div>
                </div>
                <div className="price-description">
                  <div className="name">Przedłużanie rzęs metodą 2:1</div>
                  <div className="price">220zł</div>
                  <div className="time">150min</div>
                </div>
                <div className="price-description">
                  <div className="name">Przedłużanie rzęs metodą 3:1</div>
                  <div className="price">240zł</div>
                  <div className="time">150min</div>
                </div>
                <div className="price-description">
                  <div className="name">Przedłużanie rzęs metodą 4:1</div>
                  <div className="price">280zł</div>
                  <div className="time">150min</div>
                </div>
                <div className="price-description">
                  <div className="name">
                    Uzupełnienie rzęs metodą 1:1/2:1/3:1
                  </div>
                  <div className="price">od 50zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">Zdjęcie rzęs</div>
                  <div className="price">170 / 190 / 210 zł</div>
                  <div className="time">90min</div>
                </div>
              </div>
            )}
            {selectedPrice === "epilation" && (
              <div className="selected-price">
                <h1 className="price-title">DEPILACJA LASEROWA</h1>
                <div className="price-description">
                  <div className="name">Górna warga</div>
                  <div className="price">150zł</div>
                  <div className="time">15min</div>
                </div>
                <div className="price-description">
                  <div className="name">Pachy</div>
                  <div className="price">200zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">Całe ręce</div>
                  <div className="price">300zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">Bikini</div>
                  <div className="price">300zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">Łydki</div>
                  <div className="price">250zł</div>
                  <div className="time">30min</div>
                </div>
              </div>
            )}
            {selectedPrice === "tanning" && (
              <div className="selected-price">
                <h1 className="price-title">OPALANIE NATRYSKOWE</h1>
                <div className="price-description">
                  <div className="name">Opalanie natryskowe całe ciało</div>
                  <div className="price">135zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">Opalanie połowa ciała</div>
                  <div className="price">80zł</div>
                  <div className="time">20min</div>
                </div>
                <div className="price-description">
                  <div className="name">Opalanie twarz, szyja, dekolt</div>
                  <div className="price">60zł</div>
                  <div className="time">20min</div>
                </div>
              </div>
            )}
            {selectedPrice === "cryolipolysis" && (
              <div className="selected-price">
                <h1 className="price-title">KRIOPOLIZA</h1>
                <div className="price-description">
                  <div className="name">Podbródek</div>
                  <div className="price">500zł</div>
                  <div className="time">30min</div>
                </div>
                <div className="price-description">
                  <div className="name">Brzuch - 1 głowica</div>
                  <div className="price">650zł</div>
                  <div className="time">60min</div>
                </div>
                <div className="price-description">
                  <div className="name">Brzuch - 2 głowice</div>
                  <div className="price">1000zł</div>
                  <div className="time">60min</div>
                </div>
                <div className="price-description">
                  <div className="name">Boczki (dolna część pleców)</div>
                  <div className="price">1000zł</div>
                  <div className="time">60min</div>
                </div>
                <div className="price-description">
                  <div className="name">Uda - wewnętrzna część</div>
                  <div className="price">1000zł</div>
                  <div className="time">60min</div>
                </div>
                <div className="price-description">
                  <div className="name">Uda - zewnętrzna część</div>
                  <div className="price">1000zł</div>
                  <div className="time">60min</div>
                </div>
              </div>
            )}
            {selectedPrice === "hairdressing" && (
              <div className="selected-price">
                <h1 className="price-title">FRYZJERSTWO</h1>
                <div className="price-description">
                  <div className="name">Warkoczyki box braids</div>
                  <div className="price">600zł</div>
                  <div className="time">4h</div>
                </div>
                <div className="price-description">
                  <div className="name">Afroloki</div>
                  <div className="price">750zł</div>
                  <div className="time">5h</div>
                </div>
                <div className="price-description">
                  <div className="name">Afrofale</div>
                  <div className="price">850zł</div>
                  <div className="time">5h</div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PriceList;
