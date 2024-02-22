import "./Cryotherapy.css";
import krio from "../../images/krio.avif";

const Cryotherapy = () => {
  return (
    <div>
      {" "}
      <div className="single-offer">
        <img src={krio} className="offer-photo"></img>
        <div className="offer-details">
          <h1>KRIOPOLIZA</h1>
          <p>Odchudzanie dzięki kriopolizie</p>
          <button className="offer-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
      </div>
    </div>
  );
};

export default Cryotherapy;
