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



const Listlessons = () => {

const listtitle = 'Текущий урок: Приветствие'



    return(
        
        <>

            <div className="listpage">

                <div className="listcontainer"> 
                    <Header title={listtitle} />
                    <div className="list_main" >
                        <div className="circlepart">
                            <div className="thislesson" >Текущий курс: <span className="abouthtml">HTML5  Как всё устроено</span></div>
                            <div className="circle">
                                <Circlepart/>
                            </div>
                        </div>

                         <div className="training">
                            <div>
                                <div className="trainhead">Как устроено обучение</div>
                                <div className="description">
                                    Всё обучение в Практикуме разбито на спринты. <br/> Спринт — это двухнедельный отрезок, который <br/>  построен <br/> 
                                    определённым образом: сначала вы изучаете теорию, <br/>  потом практикуетесь в тренажёре, <br/> 
                                    затем делаете и сдаёте проект.
                                </div>
                                <button className="continuelearnbtn">Продолжить обучение <AiOutlineRight/></button>
                            </div>
                            <div>
                                <img alt="images" className="numberlesson" src={numberlesson} />
                            </div>
                        </div>


                        <div className="yourcourses">
                            <div className="your_courses">Ваши курсы:</div>
                            <div className="courscard">
                                
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Привет</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={aboutwebdev} />
                                        <p className="itemtitle" >Что такое <br/>веб-разработка</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={employment} />
                                        <p className="itemtitle" >Про <br/> Трудоустройство</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" >Как устроено <br/> обучение</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={Escortteam} />
                                        <p className="itemtitle" >Команда <br/>сопровождения</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={learningprogramm} />
                                        <p className="itemtitle" >Программа <br/> обучения</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={petprojects} />
                                        <p className="itemtitle" >Какие проекты <br/> предстоит делать?</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={realprojects} />
                                        <p className="itemtitle" >Про реальные <br/> проекты</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img alt="images" className="itemimg" src={timeforlearn} />
                                        <p className="itemtitle" >Сколько времени <br/>придётся тратить <br/>на учёбу?</p>
                                    </div>

                                

                            </div>

                        </div> 
                    </div>
                    <div className="footlist">
                        <Footer/>

                    </div>
                </div> 
            </div>

        </>

    )
}




export default Listlessons;
