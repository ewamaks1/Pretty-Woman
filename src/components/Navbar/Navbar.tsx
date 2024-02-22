import "./Navbar.css";
import logo from "../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-page">
      <img src={logo} alt="logo" className="navbar-logo"></img>
      <ul className="navbar-list">
        <li className="navbar-list-item" onClick={() => navigate("/")}>
          Strona Główna
        </li>
        <li className="navbar-list-item" onClick={() => navigate("/offer")}>
          Usługi
        </li>
        <li className="navbar-list-item" onClick={() => navigate("/gallery")}>
          Galeria
        </li>
        <li
          className="navbar-list-item"
          onClick={() => navigate("/price-list")}
        >
          Cennik
        </li>
        <li className="navbar-list-item" onClick={() => navigate("/contact")}>
          Kontakt
        </li>
        <li className="navbar-list-item" onClick={() => navigate("/reviews")}>
          Recenzje
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
