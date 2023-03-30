import React, { useState } from "react";
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
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import './Listlesson.scss';



const Listlessons = () => {

const listtitle = 'Текущий урок: Приветствие'


    const [ numberS, setNumberS ] = useState(0)


    const ClickedFunction = (int) => {
        setNumberS(int)
        console.log("object +", int);

        for (let i = 1; i <= 9; i++) {

            const line = document.getElementById(`l_${i}`).classList.remove('listpage_list_item_line_1')
            const circcle = document.getElementById(`c_${i}`).classList.remove('listpage_list_item_circle_1')
            
             console.log(line, circcle);
        }

        for (let i = 1; i <= int; i++) {

            const line = document.getElementById(`l_${i}`).classList.add('listpage_list_item_line_1')
            const circcle = document.getElementById(`c_${i}`).classList.add('listpage_list_item_circle_1')
            
             console.log(line, circcle);
        }

    }





    return(
            <div className="listpage">

                <div className="listcontainer"> 
                    <Header title={listtitle} />
                    <div className="list_main" >
                        <div className="circlepart">
                            <div className="thislesson" >Текущий курс: <span className="abouthtml">HTML5  Как всё устроено</span></div>
                            <div className="circle">
                                {/* <Circlepart/> */}
                                <ul className="listpage_list">
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_1'></span> <span  className={`listpage_list_item_circle ${numberS === 1 ? 'dp' : 1 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(1)}  id="c_1"></span> <h5 className="listpage_list_item_text">{numberS === 1 ? '1' : 1 < numberS ? '1' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_2' ></span> <span className={`listpage_list_item_circle ${numberS === 2 ? 'dp' : 2 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(2)} id="c_2" ></span> <h5 className="listpage_list_item_text">{numberS === 2 ? '2' : 2 < numberS ? '2' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_3' ></span> <span className={`listpage_list_item_circle ${numberS === 3 ? 'dp' : 3 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(3)} id="c_3" ></span> <h5 className="listpage_list_item_text">{numberS === 3 ? '3' : 3 < numberS ? '3' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_4' ></span> <span className={`listpage_list_item_circle ${numberS === 4 ? 'dp' : 4 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(4)} id="c_4" ></span> <h5 className="listpage_list_item_text">{numberS === 4 ? '4' : 4 < numberS ? '4' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_5' ></span> <span className={`listpage_list_item_circle ${numberS === 5 ? 'dp' : 5 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(5)} id="c_5" ></span> <h5 className="listpage_list_item_text">{numberS === 5 ? '5' : 5 < numberS ? '5' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_6' ></span> <span className={`listpage_list_item_circle ${numberS === 6 ? 'dp' : 6 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(6)} id="c_6" ></span> <h5 className="listpage_list_item_text">{numberS === 6 ? '6' : 6 < numberS ? '6' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_7' ></span> <span className={`listpage_list_item_circle ${numberS === 7 ? 'dp' : 7 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(7)} id="c_7" ></span> <h5 className="listpage_list_item_text">{numberS === 7 ? '7' : 7 < numberS ? '7' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_8' ></span> <span className={`listpage_list_item_circle ${numberS === 8 ? 'dp' : 8 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(8)} id="c_8" ></span> <h5 className="listpage_list_item_text">{numberS === 8 ? '8' : 8 < numberS ? '8' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_9' ></span> <span className={`listpage_list_item_circle ${numberS === 9 ? 'dp' : 9 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(9)} id="c_9" ></span> <h5 className="listpage_list_item_text">{numberS === 9 ? '9' : 9 < numberS ? '9' : null }</h5></li>
                                </ul>
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
                                
                                    <div className={`yourcoursescard ${numberS === 1 ? 'dp' : 1 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(1)} id='1'>
                                        <img alt="images" className="itemimg" src={Hi} />
                                        <p className="itemtitle" >Привет</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 2 ? 'dp' : 2 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(2)} id='2'>
                                        <img alt="images" className="itemimg" src={aboutwebdev} />
                                        <p className="itemtitle" >Что такое <br/>веб-разработка</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 3 ? 'dp' : 3 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(3)} id='3'>
                                        <img alt="images" className="itemimg" src={employment} />
                                        <p className="itemtitle" >Про <br/> Трудоустройство</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 4 ? 'dp' : 4 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(4)} id='4'>
                                        <img alt="images" className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" >Как устроено <br/> обучение</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 5 ? 'dp' : 5 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(5)} id='5'>
                                        <img alt="images" className="itemimg" src={Escortteam} />
                                        <p className="itemtitle" >Команда <br/>сопровождения</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 6 ? 'dp' : 6 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(6)} id='6'>
                                        <img alt="images" className="itemimg" src={learningprogramm} />
                                        <p className="itemtitle" >Программа <br/> обучения</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 7 ? 'dp' : 7 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(7)} id='7'>
                                        <img alt="images" className="itemimg" src={petprojects} />
                                        <p className="itemtitle" >Какие проекты <br/> предстоит делать?</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 8 ? 'dp' : 8 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(8)} id='8'>
                                        <img alt="images" className="itemimg" src={realprojects} />
                                        <p className="itemtitle" >Про реальные <br/> проекты</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 9 ? 'dp' : 9 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(9)} id='9'>
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

        

    )
}




export default Listlessons;
