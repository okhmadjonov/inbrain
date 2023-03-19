import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { width } from "@mui/system";
const Header = (props) => {
  const [isShown, setIsShown] = useState(true);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  const title = props.title;
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <p style={{display: isShown? 'block': 'none', marginTop: '55px'}} className="learn">{title}</p>
      <InputGroup className="Searchbar" 
          style={{
          display: isShown? 'none' : 'flex',
/*           justifyContent: 'space-between',
          alignItems: 'center',
          width: '555px',
          height: '68px',
          background: '#F8F8FF',
          borderRadius: '30px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)' */


        }} 
        >
        <Form.Control className="input"
  /*         style={{
            border: 'none',
            background: 'none',
            marginLeft: '20px',
            width: '450px',
            height: '100%',
          }} */
          placeholder="Поиск..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
          <Button className="Search" 
/*             style={{border: 'none', 
            width: '56px', 
            height: '38.56px',
            color: '#ffffff',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            border: 'none',
            background: '#000000',
            borderRadius: '110.164px',
            marginRight: '20px',
            cursor: 'pointer'
            }}  */
            id="button-addon2">
            <BiSearchAlt/>
          </Button>
      </InputGroup>
      <button style={{display: isShown? 'block' : 'none'}} onClick={handleClick} className="search" >
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
