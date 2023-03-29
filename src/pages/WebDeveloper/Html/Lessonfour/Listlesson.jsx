import React from "react";
import numberlesson from "../../../../assets/images/numberlesson.png";
import Hi from "../../../../assets/images/Hi.png";
import Howtraining from "../../../../assets/images/Howtraining.png";
import { AiOutlineRight } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Circlepart from "./circle";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import "./Listlesson.scss";
import { useTranslation } from "react-i18next";

const Lessonfour = () => {
  const {t} = useTranslation();
  const listtitle = t('Lessonfour.1');
  return (
    <div className="lessonfourpage">
      <div className="lessonfourcontainer">
        <Header title={listtitle} />
        <div className="list_main">
          <div className="circlepart">
            <div className="thislesson">
              {t('Lessonfour.2')} <span className="abouthtml">{t('Lessonfour.3')}</span>
            </div>
            <div className="circle">
              <Circlepart />
            </div>
          </div>

          <div className="training">
            <div>
              <div className="trainhead">{t('Lessonfour.4')}</div>
              <div className="description">
              {t('Lessonfour.5')} <br /> {t('Lessonfour.6')} <br /> {t('Lessonfour.7')} <br />
              {t('Lessonfour.8')} <br /> {t('Lessonfour.9')} <br />
              {t('Lessonfour.10')}
              </div>
              <div
                style={{ display: "flex", gap: "80px", alignItems: "center" }}>
                <button className="tohome">
                {t('Lessonfour.11')} <FaUser />
                </button>
                <button className="continuelearnbtn">
                {t('Lessonfour.12')} <AiOutlineRight />
                </button>
              </div>
            </div>
            <div>
              <img alt="images" className="numberlesson" src={numberlesson} />
            </div>
          </div>

          <div className="yourcourses">
            <div className="your_courses">{t('Lessonfour.13')}</div>
            <div className="courscard">
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">{t('Lessonfour.14')}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">{t('Lessonfour.15')}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">{t('Lessonfour.16')}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Howtraining} />
                <p className="itemtitle">{t('Lessonfour.17')}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Howtraining} />
                <p className="itemtitle">{t('Lessonfour.18')}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Howtraining} />
                <p className="itemtitle">
                {t('Lessonfour.19')} <br /> {t('Lessonfour.20')}
                </p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">
                {t('Lessonfour.21')} <br /> {t('Lessonfour.22')}
                </p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">
                {t('Lessonfour.23')} <br /> {t('Lessonfour.24')}
                </p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">
                {t('Lessonfour.25')} <br />
                {t('Lessonfour.26')} <br />
                {t('Lessonfour.27')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footlist">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Lessonfour;
