import "./Navbar.css";
import logo from "../../images/logo.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavItem } from "../Interfaces/Interfaces";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { label: "Strona Główna", path: "/" },
    { label: "Usługi", path: "/offer" },
    { label: "Galeria", path: "/gallery" },
    { label: "Cennik", path: "/price-list" },
    { label: "Kontakt", path: "/contact" },
    { label: "Recenzje", path: "/reviews" },
  ];

  return (
    <div className="navbar-page">
      <img src={logo} alt="logo" className="navbar-logo"></img>
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="navbar-list-item"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
