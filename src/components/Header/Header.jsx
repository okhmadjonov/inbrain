import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
const Header = (props) => {
  const title = props.title;
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <p className="learn">{title}</p>
      <button className="search">
        <BiSearchAlt />
      </button>
      <div className="languages">
        <button className="languagebtn">RU</button>
        <button className="languagebtn">UZ</button>
        <button className="languagebtn">EN</button>
      </div>
    </div>
  );
};

export default Header;
