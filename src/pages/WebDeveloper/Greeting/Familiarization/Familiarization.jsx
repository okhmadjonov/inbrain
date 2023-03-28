import React from "react";
import bightml from "../../../../assets/images/bightml.png";
import littlehtml from "../../../../assets/images/littlehtml.png";
import foundation from "../../../../assets/images/foundation.png";
import "./familiarization.scss";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Familiarization = () => {
  const { t } = useTranslation();
  const titlehead = (
    <p>
      {t("Familiarization.1")}:{" "}
      <span style={{ color: "#1c84ff" }}> {t("Familiarization.2")}</span>
    </p>
  );

  return (
    <>
      <div className="familiarpage">
        <div className="familiarcontainer">
          <div>
            <Header title={titlehead} />
          </div>
          <div className="aboutlesson">
            <div className="introduction">
              {t("Familiarization.3")}
              <br /> {t("Familiarization.4")} : )
            </div>
            <div className="aboutfoundation">
              {t("Familiarization.5")}{" "}
              <span className="course">HTML CSS JS</span>.
              {t("Familiarization.6")} <br /> {t("Familiarization.7")}
            </div>
            <div className="comforts">
              {t("Familiarization.8")} <br /> {t("Familiarization.9")}
            </div>
          </div>
          <div className="videopart">
            <div className="watchvideo">{t("Familiarization.10")}</div>
            <div className="videolessons">
              <img className="bigimg" src={bightml} alt="BigImg" />
              <div className="lessons">
                <div className="firstlesson">
                  <img className="littlimg" src={littlehtml} alt="BigImg2" />
                  <p className="firsttxt">
                    {t("Familiarization.11")} <br /> HTML ?
                  </p>
                </div>
                <div className="secondlesson">
                  <img className="littlimg" src={littlehtml} alt="BigImg3" />
                  <p className="secondtxt">
                    {t("Familiarization.12")}
                    <br /> HTML ?
                  </p>
                </div>
                <div className="thirdlesson">
                  <img className="littlimg" src={littlehtml} alt="BigImg4" />
                  <p className="thirdtxt">
                    {t("Familiarization.13")}
                    <br /> HTML ?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="webdev_f">
            <div className="foundation">
              <div className="webdevcourse">
                <img src={foundation} alt="BigImg5" />
              </div>
            </div>
            <div className="aboutcourse">
              <p className="kurs">{t("Familiarization.14")}</p>
              <p className="topro">{t("Familiarization.15")}</p>
              <p className="learnjs">
                {t("Familiarization.16")} <br />
                {t("Familiarization.17")} <br /> {t("Familiarization.18")}
              </p>
              <div className="startcourse">
                <Link to={"/Salutation"} className="start_btn">
                  {t("Familiarization.19")}
                </Link>
                <p className="durationcourse">10 {t("Familiarization.20")}</p>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Familiarization;
