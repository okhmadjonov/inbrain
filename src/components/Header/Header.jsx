import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Header = (props) => {
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
        style={{ display: isShown ? "block" : "none" ,  marginTop: "55px" }}
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
        <Button  onClick={handleClick} className="Search" id="button-addon2">
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
      <div className="languages">
        <button className="languagebtn">RU</button>
        <button className="languagebtn">UZ</button>
        <button className="languagebtn">EN</button>
      </div>
    </div>
  );
};

export default Header;
