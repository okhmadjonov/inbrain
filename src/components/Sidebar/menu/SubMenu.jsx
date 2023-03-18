import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import petrov from "../../../assets/images/petrov.png";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  margin-top: 40px;
  /* padding-top: 40px; */
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        {/* <Link to={"/User"} className="userselect">
          <img className="selectimg" src={petrov} />
          <div className="userdiv">
            <div className="selectusername">
              {item.name}
              <br /> <span className="selectbalance">{item.balance}</span>{" "}
            </div>
          </div>
        </Link> */}
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div key={index}>
              <DropdownLink to={item.path}>{item.title}</DropdownLink>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
