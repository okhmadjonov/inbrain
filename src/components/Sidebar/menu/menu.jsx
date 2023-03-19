import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData, user } from "./SidebarData";
import petrov from "../../../assets/images/petrov.png";
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdExpandMore } from "react-icons/md";
import Typography from '@mui/material/Typography';
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

import "./menu.scss";
import { fontSize } from "@mui/system";

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
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
          <NavIcon to="#">
            <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Navopen to="#">
              <AiIcons.AiOutlineClose style={{color: '#ffcc00'}} onClick={showSidebar} />
            </Navopen>

            <Accordion style={{marginTop: '40px', background: 'none', color: '#FFFFFF', marginLeft: '7%'   }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2.5rem'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center'}} >
                        <div className="avatar">
                          <img style={{borderRadius: '30px', width: '40px', height: '40px'}} src={petrov} />
                            </div>

                              <div className="ml-3">
                                <p className="m-0 p-0">UserName</p>
                                  <span style={{fontSize: '11px', color: '#ffcc00'}} >balance: 99 000 сум</span>
                              </div>
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link to={'/Userpage'} style={{color: '#FFFFFF'}} >
                      Userpage
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '10px', background: 'none', color: '#FFFFFF', marginLeft: '7%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2.5rem', color: '#1C84FF'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#1C84FF', fontSize: '20px', fontFamily: 'Inter'}} >
                        Веб разработчик
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link style={{color: '#FFFFFF'}} >
                        Lorem
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%' }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', fontSize: '18px', fontFamily: 'Inter'}} >
                        Приветствие
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{display: 'grid', gap: '20px'}}>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}} >
                      <Link style={{color: '#FFFFFF'}}>
                        Привет
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}}>
                        Что такое веб-разработка?
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}}>
                        Про трудоустройство
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Как устроено обучение
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Программа обучения
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Какие проекты <br/> предстоит делать?
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Про реальные проекты
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Сколько времени придётся <br/> тратить на учёбу?
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Будет сложно. <br/> Но у Вас получится                      
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Начать обучение
                      </Link>
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      <Link style={{color: '#FFFFFF'}} >
                        Что такое веб-разработка?                    
                      </Link>
                    </li>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center'}} >
                        HTML 
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{display: 'grid', gap: '20px'}}>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}} >
                      Базовые элементы HTML
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Теги HTML
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Заголовки
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Абзац
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 4
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 5
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 6
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 7
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 8
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 9
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 10
                    </li>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}}>
                      Урок 11
                    </li>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px', color: '#5E5858'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#5E5858'}} >
                        CSS
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link style={{color: '#FFFFFF'}} >
                      Lorem
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px', color: '#5E5858'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#5E5858' }} >
                          Javascript
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link to={'/Userpage'} style={{color: '#FFFFFF'}} >
                      Userpage
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '10px', background: 'none', color: '#FFFFFF', marginLeft: '7%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2.5rem', color: '#1C84FF',  }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', fontSize: '20px', color: '#1C84FF', fontFamily: 'Inter'}} >
                        Справочник
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link to={'/Userpage'} style={{color: '#FFFFFF'}} >
                      Userpage
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center'}} >
                        HTML 
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{display: 'grid', gap: '20px'}}>
                    <li style={{color: '#FFFFFF', fontSize: '12px'}} >
                      lorem
                    </li>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px', color: '#5E5858'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#5E5858'}} >
                        CSS
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link style={{color: '#FFFFFF'}} >
                      Lorem
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px', color: '#5E5858'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#5E5858' }} >
                          Javascript
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link to={'/Userpage'} style={{color: '#FFFFFF'}} >
                      Userpage
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '10px', background: 'none', color: '#FFFFFF', marginLeft: '7%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2.5rem', color: '#1C84FF',  }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', fontSize: '20px', color: '#1C84FF', fontFamily: 'Inter'}} >
                        Экспресс тесты
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link to={'/Userpage'} style={{color: '#FFFFFF'}} >
                      Userpage
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>   
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center'}} >
                        HTML 
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link style={{color: '#FFFFFF'}} >
                      Lorem
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px', color: '#5E5858'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#5E5858'}} >
                        CSS
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link style={{color: '#FFFFFF'}} >
                      Lorem
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '5px', background: 'none', color: '#FFFFFF', marginLeft: '10%'  }} >
                <AccordionSummary
                  expandIcon={<MdExpandMore style={{fontSize: '2rem', marginRight: '5px', color: '#5E5858'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                      <div style={{display: 'flex', textAlign: 'center', alignItems: 'center', color: '#5E5858' }} >
                          Javascript
                      </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link to={'/Userpage'} style={{color: '#FFFFFF'}} >
                      Userpage
                    </Link>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            
            
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;
