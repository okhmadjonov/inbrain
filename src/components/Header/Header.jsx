import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import i18next from "i18next";
import user from "../../assets/images/user.png";

const Header = (props) => {
  const handleLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const title = props.title;
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <p
        style={{ display: isShown ? "block" : "none", marginTop: "55px" }}
        className="learn">
        {title}
      </p>
      <InputGroup
        className="Searchbar"
        style={{
          display: isShown ? "none" : "flex",
        }}>
        <Form.Control
          className="input"
          placeholder="Поиск..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={{ outline: "none" }}
        />
        <Button onClick={handleClick} className="Search" id="button-addon2">
          <BiSearchAlt />
        </Button>
      </InputGroup>
      <div
        id="search__btn"
        style={{
          display: isShown ? "block" : "none",
        }}
        onClick={handleClick}
        className="search">
        <BiSearchAlt className="search_icon" />
      </div>
      <div className="user__language">
        {props.user ? (
          <div className="participants">
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle3">
                <img src={user} alt="User logo" />
              </div>
              <div className="circle2"></div>
            </div>
            <div className="number">
              <p>+214</p>
            </div>
          </div>
        ) : (
          <div className="languages">
            <button
              className="languagebtn"
              onClick={() => handleLanguage("ru")}>
              RU
            </button>
            <button
              className="languagebtn"
              onClick={() => handleLanguage("uz")}>
              UZ
            </button>
            <button
              className="languagebtn"
              onClick={() => handleLanguage("en")}>
              EN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
