import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import i18next from "i18next";

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
      <div 
        style={{
          overflow: 'hidden', 
          width: '650px', 
          height: '60px', 
          display: 'flex', 
          gap: '50px', 
          textAlign: 'center'
        }}>
      <p
        style={{ transform: isShown ? 'translateX(0)' : 'translateX(-200%)', fontSize: '16px' }}
        className="learn">
        {title}
      </p>
      <div 
         style={{
          transform: isShown? 'translateX(-100%)' : 'translateX(-15%)', 
          marginTop: '10px',
          background: isShown? 'none': '#F8F8FF',
          marginLeft: isShown? '50px' : '-30px',
          boxShadow: isShown? 'none' : ' 0px 1px 3px rgba(0, 0, 0, 0.25)'

          
        }}   
        className="searchBox"
      >
         <input 
          style={{
            transform: isShown? 'translateX(-100%)' : 'translateX(0)', 
            width: isShown? '0': '500px', 
            marginLeft: '20px',
          }} 
          className="searchInput" type="text" name="" placeholder="Search"
        /> 

        <div className="searchButton" onClick={handleClick} >
          <BiSearchAlt style={{marginTop: '4px'}}/>
        </div>
      </div> 

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
