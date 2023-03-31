import React, { useState } from "react";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import Modal from "../tags/modal/Modal";
import left_str from "../../../../assets/images/left_str.png";
import right from "../../../../assets/images/right.png";
import search_icon from "../../../../assets/images/search_icon.png";
import { Link } from "react-router-dom";
import "./Tags.scss";
const Tags = () => {
  const title = "Каждый может научится новому ! Даже если страшно.";
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const titles = [
    { title: "Tag Description", body: "m" },
    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
    { title: "acronym", body: "Not supported in HTML 5. Use <abbr> instead" },
    { title: "<article>", body: "Defines an article" },

    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
    { title: "acronym", body: "Not supported in HTML 5. Use <abbr> instead" },
    { title: "<article>", body: "Defines an article" },

    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
    { title: "acronym", body: "Not supported in HTML 5. Use <abbr> instead" },
    { title: "<article>", body: "Defines an article" },

    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
  ];
  return (
    <div>
      <div className="main_tags">
        <Header title={title} />
        <div className="guide">
          <h1>Справочник по элементам HTML</h1>
          <div className="btns">
            <Link to="/">
              <button>
                 <img src={left_str} alt="LeftImg" /> Назад
              </button>
            </Link>

            <Link to="/">
               <button>
                  Дальше <img src={right} alt="RightImg" />
               </button>
            </Link>
            
          </div>
        </div>
        <h1 style={{ margin: "30px 10px" }}>Теги HTML в алфавитном порядке</h1>
        <div className="search_main">
          <input type="search" className="search" />
          <div className="icon_menu">
            <img src={search_icon} width='36px' className="search_icon" alt="Search" />
          </div>
        </div>
        <div className="desc" style={{marginTop: "60px"}}>
          <div className="table_main">
            <div className="table_left">
              <ul style={{ listStyle: "none" }}>
                {titles.map((items, i) => {
                  return (
                    <li onClick={toggleModal} key={i}>
                      {items.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="table_right">
              <ul className="table2" style={{ listStyleType: "none" }}>
                {titles.map((items, i) => (
                  <li key={i}>{items.body}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="guide" style={{ marginTop: "70px" }}>
          <h1>Справочник по элементам HTML</h1>
          <div className="btns">
          <Link to="/">
              <button>
                 <img src={left_str} alt="LeftImg" /> Назад
              </button>
            </Link>
            <Link to="/">
               <button>
                  Дальше <img src={right} alt="RightImg" />
               </button>
            </Link>
          </div>
        </div>
        <Modal
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
          titles={titles}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Tags;
