import React from "react";
import numberlesson from '../../../../assets/images/numberlesson.png';
import Hi from '../../../../assets/images/Hi.png';
import aboutwebdev from '../../../../assets/images/aboutwebdev.png';
import employment from '../../../../assets/images/employment.png';
import Howtraining from '../../../../assets/images/Howtraining.png';
import Escortteam from '../../../../assets/images/Escortteam.png';
import learningprogramm from '../../../../assets/images/learningprogramm.png';
import petprojects from '../../../../assets/images/petprojects.png';
import realprojects from '../../../../assets/images/realprojects.png';
import timeforlearn from '../../../../assets/images/timeforlearn.png';
import {AiOutlineRight} from 'react-icons/ai'
import Circlepart from "./circle";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import './Listlesson.scss';
import { useTranslation } from "react-i18next";



const Listlessons = () => {
const {t} = useTranslation()
const listtitle = t('Listlesson.1')



    return(
        
        

            <div className="listpage">

                <div className="listcontainer"> 
                    <Header title={listtitle} />
                    <div className="list_main" >
                        <div className="circlepart">
                            <div className="thislesson" >{t('Listlesson.2')} <span className="abouthtml">{t('Listlesson.3')}</span></div>
                            <div className="circle">
                                <Circlepart/>
                            </div>
                        </div>

                         <div className="training">
                            <div>
                                <div className="trainhead">{t('Listlesson.4')}</div>
                                <div className="description">
                                    {t('Listlesson.5')} <br /> {t('Listlesson.6')} <br /> {t('Listlesson.7')} <br />
                                    {t('Listlesson.8')} <br /> {t('Listlesson.9')} <br />
                                    {t('Listlesson.10')}
                                </div>
                                <button className="continuelearnbtn">{t('Listlesson.11')} <AiOutlineRight/></button>
                            </div>
                            <div>
                                <img alt="images" className="numberlesson" src={numberlesson} />
                            </div>
                        </div>


                        <div className="yourcourses">
                            <div className="your_courses">{t('Listlesson.12')}</div>
                            <div className="courscard">
                                
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={Hi} />
                                        <p className="itemtitle" >{t('Listlesson.13')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={aboutwebdev} />
                                        <p className="itemtitle" >{t('Listlesson.14')}<br/>{t('Listlesson.15')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={employment} />
                                        <p className="itemtitle" >{t('Listlesson.16')} <br/> {t('Listlesson.17')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" >{t('Listlesson.18')} <br/> {t('Listlesson.19')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={Escortteam} />
                                        <p className="itemtitle" >{t('Listlesson.20')} <br/>{t('Listlesson.21')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={learningprogramm} />
                                        <p className="itemtitle" >{t('Listlesson.22')} <br/> {t('Listlesson.23')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={petprojects} />
                                        <p className="itemtitle" >{t('Listlesson.24')} <br/> {t('Listlesson.25')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={realprojects} />
                                        <p className="itemtitle" >{t('Listlesson.26')} <br/> {t('Listlesson.27')}</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={timeforlearn} />
                                        <p className="itemtitle" >{t('Listlesson.28')} <br/>{t('Listlesson.29')} <br/>{t('Listlesson.30')}</p>
                                    </div>

                                

                            </div>

                        </div> 
                    </div>
                    <div className="footlist">
                        <Footer/>

                    </div>
                </div> 
            </div>

        

    )
}




export default Listlessons;
