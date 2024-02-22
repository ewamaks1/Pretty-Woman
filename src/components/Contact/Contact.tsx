import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Pole Imię jest wymagane";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Pole Email jest wymagane";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Nieprawidłowy format adresu email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pole Wiadomość jest wymagane";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-title">KONTAKT</h1>
        <p className="contact-description">
          Zachęcam do odwiedzenia Pretty Woman, nowoczesnego centrum urody,
          zdrowia i relaksu. Gwarantuję Państwu nie tylko profesjonalną obsługę,
          ale także miło spędzony czas. W razie pytań zapraszam do kontaktu,
          chętnie odpowiem na wszystkie Państwa pytania.
        </p>
      </div>
      <div className="contact-details">
        <form onSubmit={handleSubmit} className="form">
          <label>IMIĘ: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
          <label>ADRES E-MAIL: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <label>TREŚĆ: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="area"
          />
          {errors.message && (
            <div style={{ color: "red" }}>{errors.message}</div>
          )}
          <button type="submit" className="send-button">
            WYŚLIJ
          </button>
        </form>
        <div className="contact-adresses">
          <div className="contact-data">
            <FontAwesomeIcon icon={faLocationDot} className="contact-sign" />
            <p>DANE ADRESOWE</p>
            <span className="contact-data-title">Pretty Woman</span>
            <span>ul. Dąbrowskiego 24</span>
            <span>15-369 Białystok</span>
          </div>
          <div className="contact-data">
            <FontAwesomeIcon icon={faPhone} className="contact-sign" />
            <p>DANE KONTAKTOWE</p>
            <div className="contact-number">
              <div className="phone">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="contact-details-sign"
                />
                <a href="tel:730300398">730 300 398</a>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contact-details-sign"
                />
                <a href="mailto:js2alp2007@o2.pl">js2alp2007@o2.pl</a>
              </div>
            </div>
          </div>
          <div className="contact-data">
            <FontAwesomeIcon
              icon={faPersonChalkboard}
              className="contact-sign"
            />
            <p>SOCIAL MEDIA</p>
            <div className="contact-number">
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="contact-details-sign"
                />
                <a href="https://www.facebook.com/stylistkarzesJustynaLobodzinska">
                  FACEBOOK
                </a>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="contact-details-sign"
                />
                <a href="https://www.instagram.com/prettywoman_by_lobodzinska/">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
