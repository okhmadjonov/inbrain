import React from "react";
import course from "../../assets/images/verstka.png";
import Skoro from "../../assets/images/skoro.jpg";
import bow from "../../assets/images/bow.png";
import foundation from "../../assets/images/foundation.png";
import htmldemo from "../../assets/images/htmldemo.png";
import cssdemo from "../../assets/images/cssdemo.png";
import jsdemo from "../../assets/images/jsdemo.png";
import phpdemo from "../../assets/images/phpdemo.png";
import javademo from "../../assets/images/javademo.png";
import mobiledemo from "../../assets/images/mobiledemo.png";
import collectivework from "../../assets/images/collectivework.png";
import student from "../../assets/images/student.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import petrov from "../../assets/images/petrov.png";
import Slider from "react-slick";
import CarouselCompound from "./slider/carousel-compound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import leftgroup from "../../assets/images/leftgroup.png";
import rightgroup from "../../assets/images/rightgroup.png";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Video from "../../assets/images/youtube.png";

const Home = (props) => {
  const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <img
      style={{
        ...style,
        width: "60px",
        height: "60px",
        marginTop: "60px",
        marginRight: "-22px",
      }}
      src={rightgroup}
      alt="nextArrow"
      {...props}
    />
  );

  const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }) => (
    <img
      style={{
        ...style,
        width: "60px",
        height: "60px",
        marginTop: "60px",
        zIndex: "999",
      }}
      src={leftgroup}
      alt="prevArrow"
      {...props}
    />
  );

  const data = [
    {
      id: 1,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 2,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 3,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 4,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 5,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 6,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const activedata = [
    {
      id: 1,
      img: htmldemo,
      title: "HTML",
      btn: "Начать обучение",
    },
    {
      id: 2,
      img: cssdemo,
      title: "CSS",
      btn: "Начать обучение",
    },
    {
      id: 3,
      img: jsdemo,
      title: "JavaScript",
      btn: "Начать обучение",
    },
  ];

  const soon = [
    {
      id: 1,
      img: phpdemo,
      title: "PHP",
      p: "Совсем скоро",
    },
    {
      id: 2,
      img: javademo,
      title: "Java",
      p: "Совсем скоро",
    },
    {
      id: 3,
      img: mobiledemo,
      title: "Mobile Dev.",
      p: "Совсем скоро",
    },
  ];

  const headerTitle = "Каждый может научится новому ! Даже если страшно.";

  return (
    <>
      <div className="home">
        <div className="home__container">
          <Header title={headerTitle} />
          <div className="app__main-container">
            <CarouselCompound infinite>
              <CarouselCompound.Page>
                <div className="item item-1" alt="Color">
                  <img
                    style={{ zIndex: "999", position: "absolute" }}
                    src={Video}
                  />
                  <img className="course" src={course} />
                </div>
              </CarouselCompound.Page>
              <CarouselCompound.Page>
              <div className="item item-2" alt="Color">
                  <img
                    style={{ zIndex: "999", position: "absolute" }}
                    src={Video}
                  />
                  <img className="course" src={course} />
                </div>
              </CarouselCompound.Page>
              <CarouselCompound.Page>
              <div className="item item-3" alt="Color">
                  <img
                    style={{ zIndex: "999", position: "absolute" }}
                    src={Video}
                  />
                  <img className="course" src={course} />
                </div>
              </CarouselCompound.Page>
            </CarouselCompound>
          </div>
          <div className="ourgoal">
            <div className="whatweteach">
              <div className="teachhead">Чему мы учим ?</div>
              <p className="teachtxt">
                Если вы хотите получить знания и поменять <br /> специализацию,
                или освоить самую <br /> востребованную профессию во всем мире{" "}
                <br />
                то вы правильно <br /> сделали что выбрали нас !
              </p>
            </div>
            <div className="linktoinfo">
              <div className="meet">Давайте знакомится</div>

              <div className="button">
                <Link to="/Familiarization" className="clickme">
                  <span className="linkbtn">Жми сюда :)</span>{" "}
                  <img className="bow" src={bow} alt="Skore 31" />{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="webdev">
            <div className="foundation">
              <div className="webdevcourse">
                <img src={foundation} alt="Foundation" />
              </div>
            </div>
            <div className="aboutcourse">
              <p className="kurs">Курс</p>
              <p className="topro">Веб-разработчик с нуля до PRO</p>
              <p className="learnjs">
                Вы научитесь верстать сайты на HTML и <br /> CSS, изучите
                JavaScript. И сделаете <br /> первые проекты для портфолио.
              </p>
              <div className="startcourse">
                <Link to="/Salutation" className="start_btn">
                  Начать вводный курс
                </Link>

                <p className="durationcourse">10 месяцев</p>
              </div>
            </div>
          </div>
          <div className="courses_part">
            <div className="techhead">
              <div className="learningtechnology">
                <p className="technology">Технологии</p>
                <p className="startfromnull">Обучение с нуля</p>
              </div>
              <button className="startlearnbtn"> Начать обучение </button>
            </div>

            <div className="aboutourtechnology">
              А вот технологии, которые будете использовать.
              <br />
              <p className="abouttechhead">
                Мы регулярно сверяемся с действующими разработчиками и
                руководителями из <br /> индустрии, чтобы в программе оставались
                только актуальные навыки и <br /> инструменты.
              </p>
            </div>
            <div className="democourses">
              {activedata.map((item) => (
                <>
                  <div className="item">
                    <div>
                      <img
                        className="itemdemo"
                        src={item.img}
                        alt="Item demo"
                      />
                      <div className="itemhead">{item.title}</div>
                    </div>

                    <button className="startlearnitem">{item.btn}</button>
                  </div>
                </>
              ))}
              {soon.map((item) => (
                <div className="item">
                  <div>
                    <img
                      className="itemdemo"
                      src={item.img}
                      alt="Item demo 2"
                    />
                    <div className="itemhead">{item.title}</div>
                  </div>
                  <p className="itemhead">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="jobdeveloper">
            <div className="jobhead">
              Что именно вы будете делать, когда станете веб-разработчиком
            </div>

            <div className="tasksdeveloper">
              <div className="tasks">
                <p className="writecode">
                  Писать код на HTML, CSS и JavaScript
                </p>
                <p className="createwebsite">
                  Разрабатывать сайты и веб-приложения
                </p>
                <p className="jobwithcollective">
                  Работать над продуктом вместе с командой
                </p>
                <p className="helpbusinesses">
                  Помогать бизнесу развиваться, а <br /> пользователям —
                  становиться счастливее
                </p>
              </div>
              <div>
                <img
                  className="collectivework"
                  src={collectivework}
                  alt="Collective work"
                />
              </div>
            </div>
          </div>
          <div className="contactus">
            <div className="helpchoosing">
              <div className="choosing">Поможем в выборе!</div>
              <div className="ask_us">
                <img className="student" src={student} alt="Student" />
                <p className="asktxt">
                  Если у вас есть вопросы о <br />
                  формате или вы не знаете, <br />
                  что выбрать, оставьте свой <br />
                  номер — мы позвоним, <br />
                  чтобы ответить на все ваши <br />
                  опросы.
                </p>
              </div>
            </div>
            <div className="registr">
              <input className="name" placeholder="Имя" />
              <input className="phone" placeholder="Телефон" />
              <input className="email" placeholder="Почта" />
              <div className="sendinfo">
                <div className="soglasie">
                  Нажимая на кнопку, я соглашаюсь на <br /> обработку{" "}
                  <a href="/">персональных данных</a> и с <br />{" "}
                  <a href="/">правилами пользования платформой</a>
                </div>
                <button className="registr_btn">
                  <big>отправить</big>
                </button>
              </div>
            </div>
          </div>
          <div className="reviews_part">
            <div className="reviewhead">Что говорят о нас студенты ?</div>
            <p className="reviewtxt">
              Если вы хотите получить знания и поменять специализацию, или
              освоить самую <br /> востребованную профессию во всем мире то вы
              правильно <br /> сделали что выбрали нас !
            </p>
            <div className="comment_part">
              <Slider {...settings}>
                {data.map((item) => (
                  <div className="review_card">
                    <div className="head_card">
                      <img className="petrov" src={item.img} alt="Petrov" />
                      <p className="username">{item.name}</p>
                    </div>
                    <div className="comment">
                      <p className="commenttxt">{item.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
