import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Html_Task_1.scss";
import question from "../../../../../assets/images/question.png";
import ref from "../../../../../assets/images/ref.png";

import { FaTimes, FaArrowRight } from "react-icons/fa";
import Footer from "../../../../../components/Footer/Footer";

const Html_Task_1 = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const handleClick1 = () => {
    setActive1((current) => !current);
  };
  const handleClick2 = () => {
    setActive2((current) => !current);
  };
  return (
    <div className="html__tasks">
      <div className="tasks__container">
        <div className="tasks__inner">
          <div className="task1__card">
            <div className="task1__header">
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
            <div className="task1__content">
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
                      <div className={active1 ? "modal__info" : " hideModal"}>
                        <div className="info">
                          <div className="info__container">
                            <div className="close" onClick={handleClick1}>
                              <span className="closeIcon">
                                {" "}
                                <FaTimes />
                              </span>
                            </div>
                            <div className="title">
                              <p>Это тренажёр, или окно ответа</p>
                            </div>
                            <div className="subtitle">
                              <p>Сюда можно писать код.</p>
                            </div>
                          </div>
                        </div>
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
                          нём уже создана кнопка с текстом Hello world. Но
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
                          тегами &lt;button&gt; и &lt;/button&gt;.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="body__right">
                  <div className="result__field">
                    <div className="result__container">
                      <div className="result">
                        <button>Hello world</button>
                      </div>
                      <div className={active2 ? "result__info" : " hideModal"}>
                        <div className="info2">
                          <div className="info2__container">
                            <div className="close" onClick={handleClick2}>
                              <span className="closeIcon">
                                {" "}
                                <FaTimes />
                              </span>
                            </div>
                            <div className="title">
                              <p>Окно результата</p>
                            </div>
                            <div className="subtitle">
                              <p>
                                Когда вы напишете код и нажмёте кнопку
                                «Проверить», здесь появится результат, как в
                                браузере.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body__right-bottom">
                    <div className="right__bottom-container">
                      <div className="bottom__ref">
                        <img src={ref} alt="Bottom ref " />
                      </div>
                      <div className="start__again">
                        <p>Начать заного</p>
                      </div>
                      <div className="check__task">
                        <Link className="check">
                          Проверить задание <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Html_Task_1;
