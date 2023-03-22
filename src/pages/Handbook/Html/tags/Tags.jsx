import React from "react";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import icon from "../../../../assets/images/search_icon.jpg";
import "./Tags.scss";
const Tags = () => {
  var tag_1 = "<!--...-->";
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
  titles.map((item, index) => {
    console.log();
  });
  return (
    <div>
      <div className="main_tags">
        <Header />
        <div className="guide">
          <h1>Справочник по элементам HTML</h1>
          <div className="btns">
            <button>Назад</button>
            <button>Дальше</button>
          </div>
        </div>
        <h1 style={{ margin: "30px 10px" }}>Теги HTML в алфавитном порядке</h1>
        <div className="search_main">
          <input type="search" className="search" />
          <div className="icon_menu">
            <img src={icon} className="search_icon" alt="Search" />
          </div>
        </div>
        <div className="desc">
          <h3>Description</h3>
          <div className="table_main">
            <div className="table_left">
              <ul style={{ listStyle: "none" }}>
                {titles.map((items, i) => {
                  return <li key={i}>{items.title}</li>;
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
        <Footer />
      </div>
    </div>
  );
};

export default Tags;
