import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import petrov from "../../../assets/images/petrov.png";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import Typography from "@mui/material/Typography";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

import "./menu.scss";
import Burger from "./Burger";

// const DropdownLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;
// `;
// const SidebarLabel = styled.span`
//   margin-left: 16px;
// `;
const Nav = styled.div`
  position: absolute;
  margin-left: 0;
  background-color: #18191b;
  height: 5400px;
  width: 51px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Navopen = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  left: 100%;
  width: 40px;
  height: 40px;
  border-radius: 0 0 10px 0;
  background: #18191b;
  cursor: pointer;
`;

const NavIcon = styled(Link)`
  position: absolute;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 7%;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 270px;
  max-width: 365px;
  height: 5400px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <Navopen>
            <FaIcons.FaChevronRight onClick={showSidebar} />
          </Navopen>
          <NavIcon to="#" onClick={showSidebar}>
            <Burger />
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Navopen to="#">
              <AiIcons.AiOutlineClose
                onClick={showSidebar}
                style={{ color: "yellow", fontWeight: "700" }}
              />
            </Navopen>

            <Accordion
              style={{
                marginTop: "80px",
                background: "none",
                color: "#FFFFFF",
              }}>
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                    }}>
                    <div className="avatar">
                      <img
                        style={{ borderRadius: "30px" }}
                        src={petrov}
                        alt="Petrov"
                      />
                    </div>

                    <div className="ml-3">
                      <p className="m-0 p-0">User name</p>
                      <span style={{ fontSize: "14px", color: "#ffcc00" }}>
                        balance: 99 000 сум
                      </span>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                    Userpage
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {SidebarData.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <SubMenu item={item} key={index} />
                  </div>
                </>
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;
