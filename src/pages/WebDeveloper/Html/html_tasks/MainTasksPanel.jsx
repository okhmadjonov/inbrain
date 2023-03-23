import React from "react";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import Html_Task_1 from "./task_1/Html_Task_1";

const MainTasksPanel = () => {
  const title = (
    <h3>
      Текущий урок: Приветствие / Привет /{" "}
      <span style={{ color: "#1c84ff" }}>1</span> из 14
    </h3>
  );
  return (
    <div className="main__tasks__panel">
      <div className="tasks__container">
        <div className="header1">
          <Header title={title} />
        </div>
        <Html_Task_1 />
        <Footer />
      </div>
    </div>
  );
};

export default MainTasksPanel;
