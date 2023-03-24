import React, { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import users from "../../../../assets/images/users.png";
import videolessonimg from "../../../../assets/images/videolessonimg.png";
import taskimg from "../../../../assets/images/taskimg.png";

import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import thanksimg from "../../../../assets/images/thanksimg.png";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi2";
import { Link } from "react-router-dom";
import petrov from "../../../../assets/images/petrov.png";
import footphone from "../../../../assets/images/footphone.png";
import foottg from "../../../../assets/images/foottg.png";
import foottube from "../../../../assets/images/foottube.png";
import footinsta from "../../../../assets/images/footinsta.png";
import logofooter from "../../../../assets/images/logofooter.png";
import footlocation from "../../../../assets/images/footlocation.png";
import "./salutation.scss";
import styled from "styled-components";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";

const Salutation = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const saluttitle = "Текущий урок: Приветствие / Привет / 1 из 14";
  return (
    <>
      <div className="salutationpage">
        <div className="salutationcontainer">
          <Header title={saluttitle} />
          <div className="mainpart">
            <div className="weareinbrain">Привет мы команда Inbrain : )</div>
            <p className="aboutlessons">
              Давай знакомится мы команда inbrain которая создала курсы по веб
              разработке. Актуальные знания от <br /> признанных экспертов рынка
              для новичков. Просмотри пожалуйста видео чтобы продолжить дальше.
            </p>
            <div className="video__lesson__img">
              <img className="image" src={videolessonimg} />
            </div>
            <div className="sprint">
              Всё обучение в Практикуме разбито на спринты. Спринт — это
              двухнедельный отрезок, который построен <br />
              определённым образом: сначала вы изучаете теорию, потом
              практикуетесь в тренажёре, <br />
              затем делаете и сдаёте проект.
              <br />
              <br />
              Проект проверяет, как вы усвоили навыки текущего спринта, поэтому
              в конце спринта проект нужно отправить на <br />
              проверку. Эта проверка называется код-ревью — реальный разработчик
              (код-ревьюер) смотрит вашу работу и даёт <br />
              комментарии: что нужно исправить, а что можно сделать лучше.
            </div>

            <div className="testpart">
              <div style={{ display: isShown ? "block" : "none" }}>
                <div className="block">
                  <div className="test">
                    <div className="testhead">
                      Выберите один из вариантов ответа:{" "}
                    </div>

                    <div className="variants">
                      <input name="radio" className="custom" type={"radio"} />
                      <label></label>
                    </div>
                    <div className="variants">
                      <input className="custom2" name="radio" type={"radio"} />
                      <label></label>
                    </div>
                    <div className="variants">
                      <input className="custom3" name="radio" type={"radio"} />
                      <label></label>
                    </div>
                    <div className="variants">
                      <input className="custom4" name="radio" type={"radio"} />
                      <label></label>
                    </div>
                  </div>
                  <div>
                    <img className="taskimg" src={taskimg} />
                  </div>
                </div>
              </div>
              <div style={{ display: isShown ? "none" : "block" }}>
                <div className="thanks">Спасибо за ответ !!!</div>
                <div>
                  <img src={thanksimg} />
                </div>
              </div>
              <div className="btns">
                <div>
                  <button className="returntolist">
                    {" "}
                    <AiOutlineLeft /> Вернутся к списску уроков
                  </button>
                </div>
                <div>
                  <button onClick={handleClick} className="forward">
                    Вперед <AiOutlineRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Salutation;
