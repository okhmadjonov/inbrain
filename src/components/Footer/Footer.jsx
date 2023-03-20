 import React from "react";
 import "./Footer.scss";
 import logofooter from "../../assets/images/logofooter.png";
 import footlocation from "../../assets/images/footlocation.png";
 import footphone from "../../assets/images/footphone.png";
 import foottg from "../../assets/images/foottg.png";
 import foottube from "../../assets/images/foottube.png";
 import footinsta from "../../assets/images/footinsta.png";
 const Footer = () => {
   return (
     <div className="footer">
       <div className="footpart">
         <div className="footadress">
           <img src={logofooter} alt="Logo" />
           <div className="adresses">
             <div className="adress">
              <img className="location" src={footlocation} alt="Location" />
              <p className="adressoffice">
                39, Mukhammad Yusuf Street, <br /> Tashkent, 100077
              </p>
            </div>
            <div className="footcontact">
              <img className="phone" src={footphone} alt="Phone" />
              <p className="ournumber">
                +998 71 203 33 38 <br /> +998 71 203 33 38
              </p>
            </div>
          </div>
        </div>
        <div className="social_menu">
          <div className="socialhead">Социальные сети:</div>

          <div className="socialmedia">
            <div className="telegramm">
              <img className="foottg" src={foottg} alt="Foot" />
              <p className="tg">Telegram</p>
            </div>
            <div className="instagramm">
              <img className="footinsta" src={footinsta} alt="Insta" />
              <p className="insta">Instagram</p>
            </div>
            <div className="youtube">
              <img className="foottube" src={foottube} alt="youtube" />
              <p className="tube">YouTube</p>
            </div>
          </div>
        </div>
        <div className="menu_items">
          <div className="itemhead">Пункты меню:</div>
          <div className="about_item">
            <p>О нас</p>
            <p>Курсы</p>
            <p>Трудоустройства</p>
          </div>
        </div>
        <div className="additionally">
          <div className="addithead">Дополнительно:</div>
          <div className="addit_menu">
            <p>Политика конфиденциальности</p>
            <p>Правила пользование</p>
            <p>Форум</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
