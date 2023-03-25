import React, { useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2"
import { MdOutlineNavigateNext } from "react-icons/md"


import { Link } from "react-router-dom";
import "./Task_Result.scss";
import question from "../../../../../assets/images/question.png";
import ref from "../../../../../assets/images/ref.png";
import thanksimg from "../../../../../assets/images/thanksimg.png";

import { FaTimes, FaArrowRight } from "react-icons/fa";
import Footer from "../../../../../components/Footer/Footer";
import Header from "../../../../../components/Header/Header";
import { BsTypeH3 } from "react-icons/bs";

const Task_Result = () => {
  const title = (
    <h3>
      Текущий урок: Приветствие / Привет /{" "}
      <span style={{ color: "#1c84ff" }}>1</span> из 14
    </h3>
  );
  return (
    <div className="task__result">
      <div className="result__container">
        <Header title={title} />
        <div className="result__inner">
          <div className="result__card">
            <div className="result__header">
              <div className="header__left">
                <div className="title">
                  <p className="top__title">
                    Задание:
                    <span className="element">Базовые элементы. HTML</span>
                  </p>
                  <p className="bottom__title">
                    Урок: <span className="counter">1 </span>/ 11
                  </p>
                </div>
              </div>
              <div className="header__right">
                <Link>
                  <button>
                    Прочитать теорию заного
                    <img src={question} alt="Question mark" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="result__content">
              <div className="content__header">
                <div className="header__left">
                  <p>index.html</p>
                </div>
                <div className="header__right">
                  <div className="ref">
                    <img src={ref} alt="Refresh" />
                  </div>
                  <div className="screen__size">
                    <p>
                      Браузер <span>646х476</span>
                    </p>
                  </div>
                  <div className="participants">
                    <div className="circles">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                      <div className="circle3"></div>
                    </div>
                    <div className="number">
                      <p>+214</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content__body">
                <div className="body__left">
                  <div className="code__field">
                    <div className="code__container">
                      <div className="code">
                        <p>
                          &lt;
                          <span>button</span>&gt;Hello world &lt;/{" "}
                          <span>button</span>&gt;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="body__left-bottom">
                    <div className="bottom__container">
                      <div className="bottom__title">
                        <p>Урок 1: Базовые элементы. HTML</p>
                      </div>
                      <div className="bottom__subtitle">
                        <p>
                          Перед вами окно редактора кода с файлом index.html. В
                          нём уже создана кнопка с текстом Hello world. <br /> <br />  Но
                          аудитория сервиса, который мы делаем, русскоязычная,
                          поэтому текст на кнопке нужно перевести. Замените
                          текст Hello world между &lt;button&gt; и
                          &lt;/button&gt; на русский аналог этого слова —
                          «Привет мир». Как сделаете это, нажимайте «Проверить»
                          — в окне справа отобразится результат.
                        </p>
                      </div>
                      <div className="bold__title">
                        <p>Подсказка</p>
                      </div>
                      <div className="bold__subtitle">
                        <p>
                          Свобода слова — превыше всего. Но тренажёр пропустит
                          вас дальше только с написанным словом Нравится между
                          тегами <pre>&lt;button&gt; и &lt;/button&gt;</pre>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        {/*--//------//--------//-------//----//BODY-RIGHT//--------//------//------//---  */}
                <div className="body__right">
                  <div className="result__field">
                    <div className="result__container">
                      <div className="result">
                        <button>Hello world</button>
                      </div>
                      <div className="result__check">
                          <h1>Правильный ответ !!! <br /> Так держать, идем дальше.</h1>
                          <img src={thanksimg} width="250px" alt="error" />
                          <div className="btn__wrapper">
                            <button className="btn__primary">Скачать исходник  <HiArrowDownTray size={24} /></button>
                            <button className="btn__primary">Продолжить<MdOutlineNavigateNext size={26} /></button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="body__right-bottom">
                    <div className="right__bottom-container">
                      <div className="bottom__ref">
                        <img src={ref} alt="Bottom ref " />
                        <p>Начать заного</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task_Result;
