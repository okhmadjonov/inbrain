import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Video from "../videoPlayer/Video";
import context__img from "../../../../../assets/images/lesson__html__context__img.png";
import knopka__img from "../../../../../assets/images/knopka.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./Lesson_1.scss";
import LessonModal from "./LessonModal";
import Context from "../../../../../components/Context/Context";
const Lesson_1 = (props) => {
  const { modal } = useContext(Context);

  return (
    <div className="lesson_1">
      {modal ? <LessonModal /> : null}
      <div className="lesson_1__container">
        <div className="lesson_1__content">
          <div className="lesson__html">
            <div className="lesson__html-container">
              <div className="lesson__html-inner">
                <div className="lesson__title__video">
                  <div className="lesson__title">
                    <h2 className="title__black"> Текущий урок:</h2>
                    <h2 className="title__blue"> Базовые элементы. HTML</h2>
                  </div>
                  <div className="lesson__video">
                    <Video />
                  </div>
                </div>
                <div className="lesson__context">
                  <div className="first__text">
                    <p>
                      Страницы сайтов собирают из элементов, как конструктор
                      LEGO. Текстовые блоки, картинки, ссылки, кнопки — всё это
                      элементы сайта. Элементы описывают на языке HTML. Любая
                      веб-страница содержит код на этом языке и сохраняется в
                      HTML-файле. Когда вы открываете сайт, именно файл с
                      HTML-кодом первым делом загружается в браузер.
                    </p>
                  </div>
                  <div className="first__img">
                    <img src={context__img} alt="Context img" />
                  </div>
                  <div className="second__text">
                    <p>
                      HTML-файл — это просто текстовый файл с расширением .html.
                      Но пишут в HTML-файле не список продуктов или заметки о
                      жизни, а HTML-код. <br /> Чтобы разобраться, как устроен
                      HTML, рассмотрим пример. Вот кнопка с надписью. Нажмите на
                      неё, чтобы идти дальше:
                    </p>
                  </div>
                  <div className="second__img">
                    <button className="podpis">Кнопка с надписью</button>
                  </div>
                  <div className="third__text">
                    <p>
                      А вот код, который описывает эту кнопку. Если написать его
                      в HTML-файле, такая кнопка появится на сайте:
                    </p>
                  </div>
                  <div className="fourth__text">
                    <div className="top">
                      <span className="copy">Скопировать код </span>
                      <span className="copy_html">HTML</span>
                    </div>
                    <div className="bottom">
                      {" "}
                      <p>
                        <span style={{ color: "red" }}>&lt;button&gt;</span>
                        Кнопка с надписью
                        <span style={{ color: "red" }}>
                          &lt;/button&gt;
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="fifth__text">
                    <p>
                      Наверняка вы обратили внимание на конструкции с угловыми
                      скобками — это HTML-теги. Теги описывают элементы сайта.
                      Например, тег &lt;button&gt; описывает кнопку.
                    </p>
                  </div>
                  <div className="third__img">
                    <img src={knopka__img} alt="Knopka" />
                  </div>
                  <div className="sixth__text">
                    <p>
                      Чаще всего теги парные. Открывающий тег &lt;
                      <span>button</span>
                      &gt; говорит: «Здесь кнопка начинается», а закрывающий
                      &lt;/ <span>button</span> &gt; : «кнопка закончилась».
                      Текст между &lt; <span>button</span> &gt; и &lt;/
                      <span>button</span>&gt; отобразится на кнопке.
                    </p>
                  </div>
                  <div className="seven__text">
                    <p>
                      Этот текст может быть любым. Можно написать там
                      «Отправить» или «Зарегистрироваться» и разместить кнопку,
                      где предполагаются такие действия. Можно написать на
                      кнопке «Перейти к заданию» и разместить её прямо здесь:
                    </p>
                  </div>

                  <div className="lesson__slider">
                    <Link className="prev" to="/Webdev/lesson_1">
                      <FaArrowLeft />
                      <p>Вернуться к списку уроков</p>
                    </Link>

                    <Link className="next" to="/Webdev/Task_1">
                      <p> Перейти к заданию</p>
                      <FaArrowRight />
                    </Link>
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

export default Lesson_1;
