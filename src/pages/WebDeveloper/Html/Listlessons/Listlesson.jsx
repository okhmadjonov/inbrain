import React from "react";
import numberlesson from '../../../../assets/images/numberlesson.png';
import Hi from '../../../../assets/images/Hi.png';
import Howtraining from '../../../../assets/images/Howtraining.png';
import {AiOutlineRight} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import Circlepart from "./circle";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import './Listlesson.scss';



const Lessonfour = () => {

const listtitle = 'Текущий урок: Приветствие/Привет/1 из 14'



    return(
        
        <>

            <div className="lessonfourpage">

                <div className="lessonfourcontainer"> 
                    <Header title={listtitle} />
                    <div className="list_main" >
                        <div className="circlepart">
                            <div className="thislesson" >Текущий урок: <span className="abouthtml">Урок 4</span></div>
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
                                <div style={{display: 'flex', gap: '80px', alignItems: 'center'}}>
                                    <button className="tohome">Домой <FaUser/></button>
                                    <button className="continuelearnbtn">Продолжить обучение <AiOutlineRight/></button>
                                </div>
                            </div>
                            <div>
                                <img className="numberlesson" src={numberlesson} />
                            </div>
                        </div>


                        <div className="yourcourses">
                            <div className="your_courses">Ваши курсы:</div>
                            <div className="courscard">
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Видео курсы</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Теги HTML</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Урок 1</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" >Урок 2</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" >Урок 4</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" >Программа <br/> обучение</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Какие проекты <br/> предстоит делать?</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Про реальные <br/> проекты</p>
                                    </div>
                                    <div className="yourcoursescard">
                                        <img className="itemimg" src={Hi} />
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




export default Lessonfour;
