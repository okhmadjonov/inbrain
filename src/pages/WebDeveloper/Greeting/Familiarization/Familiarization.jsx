import React from "react";
import bightml from '../../../../assets/images/bightml.png';
import littlehtml from '../../../../assets/images/littlehtml.png';
import foundation from '../../../../assets/images/foundation.png';
import './familiarization.scss';
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { Link } from "react-router-dom";



const Familiarization = () => {

    
const titlehead = 'Текущий урок: Привет посмотри видео'
    
    return(
        <>

        <div className="familiarpage">

            <div className="familiarcontainer">
                <div>
                    <Header title={titlehead} />

                </div>
                <div className="aboutlesson">
                    <div className="introduction">Привет мы команда Inbrain - посмотри пожалуйста видео чтобы <br/> продолжить дальше обучение  : )</div>
                    <div className="aboutfoundation">
                        Давай знакомится мы команда inbrain которая создала курсы по веб разработке <span className="course">HTML CSS JS</span>.   
                        Актуальные знания от <br/> признанных экспертов для новичков. 
                    </div>
                    <div className="comforts">
                        На платформе можно получить знания по актуальным темам и востребованные навыки. 
                        Все курсы нацелены на <br/> практику: мы следим за актуальностью материала и помогаем с трудоустройством и стажировкой.
                    </div>
                    
                </div>
                <div className="videopart">
                    <div className="watchvideo">Посмотрите видео:  Что такое веб разработка ?</div>
                    <div className="videolessons">
                        <img className="bigimg" src={bightml} />
                        <div className="lessons">
                            <div className="firstlesson">
                                <img className="littlimg" src={littlehtml} />
                                <p className="firsttxt">Кто придумал <br/> HTML ?</p>
                            </div>
                            <div className="secondlesson">
                                <img className="littlimg" src={littlehtml} />
                                <p className="secondtxt">Где используют <br/> HTML ?</p>
                            </div>
                            <div className="thirdlesson">
                                <img className="littlimg" src={littlehtml} />
                                <p className="thirdtxt">Для чего нужен <br/> HTML ?</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="webdev_f">
                    <div className="foundation">
                        <div className="webdevcourse">
                            <img src={foundation}/>
                        </div>
                    </div>
                    <div className="aboutcourse">
                        <p className="kurs">Курс</p>
                        <p className="topro">Веб-разработчик с нуля до PRO</p>
                        <p className="learnjs">Вы научитесь верстать сайты на HTML и <br/> CSS, изучите JavaScript. И сделаете <br/> первые проекты для портфолио.</p>
                        <div className="startcourse">
                            <Link to={'/Salutation'} className="start_btn">Начать вводный курс</Link>
                            <p className="durationcourse">10 месяцев</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
            

        

        </>            
    )
}

export default Familiarization;