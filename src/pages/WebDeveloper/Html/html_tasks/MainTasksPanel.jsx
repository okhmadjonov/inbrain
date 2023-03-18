import React from "react";
import Header from "../../../../components/Header/Header";
import Html_Task_1 from "./task_1/Html_Task_1";

const MainTasksPanel = () => {
  return (
    <div className="main__tasks__panel">
      <div className="tasks__container">
        <div className="header1">
          <Header />
        </div>
        <Html_Task_1 />
      </div>
    </div>
  );
};

export default MainTasksPanel;
