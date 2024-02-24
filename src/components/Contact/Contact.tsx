import "./Contact.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faPhoneVolume,
  faEnvelope,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FormData } from "../Interfaces/Interfaces";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    errors: {},
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: { ...formData.errors, [name]: "" },
    });
  };

  const validateForm = (): boolean => {
    const { name, email, message } = formData;
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Pole Imię jest wymagane";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Pole Email jest wymagane";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Nieprawidłowy format adresu email";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Pole Wiadomość jest wymagane";
      isValid = false;
    }

    setFormData({ ...formData, errors: newErrors });
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
        errors: {},
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
          {formData.errors.name && (
            <div style={{ color: "red" }}>{formData.errors.name}</div>
          )}
          <label>ADRES E-MAIL: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          {formData.errors.email && (
            <div style={{ color: "red" }}>{formData.errors.email}</div>
          )}
          <label>TREŚĆ: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="area"
          />
          {formData.errors.message && (
            <div style={{ color: "red" }}>{formData.errors.message}</div>
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
