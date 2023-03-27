import React, { useState } from "react";
import close_icon from "../../../../../assets/images/close_icon.png";
import "./Modal.scss";

export default function Modal({ modal, titles, toggleModal }) {
  // const [modal, setModal] = useState(false);
 const item = '<!--...--!>'
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            oo
          </div>
          <div className="modal-content">
            <h1>
              Текущий Тег <span>{item}</span>
            </h1>
            <br/>
            <br/>
            <p>
              Страницы сайтов собирают из элементов, как конструктор LEGO.
              Текстовые блоки, картинки, ссылки, кнопки — всё это элементы
              сайта. Элементы описывают на языке HTML. Любая веб-страница
              содержит код на этом языке и сохраняется в HTML-файле. Когда вы
              открываете сайт, именно файл с HTML-кодом первым делом загружается
              в браузер.
            </p>
            <img
              onClick={toggleModal}
              className="close-modal"
              src={close_icon}
            />
          </div>
        </div>
      )}
    </>
  );
}
