import "./Hair.css";
import hair from "../../images/hair.jpg";

const Hair = () => {
  return (
    <div>
      {" "}
      <div className="single-offer">
        <img src={hair} className="offer-photo"></img>
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
