import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import Familiarization from "../../pages/WebDeveloper/Greeting/Familiarization/Familiarization";
import Salutation from "../../pages/WebDeveloper/Greeting/salutation/salutation";
import Listlessons from "../../pages/WebDeveloper/Greeting/Listlessons/Listlesson";
import User from "../../pages/Home/user/user";
import HtmlMainPanel from "../../pages/WebDeveloper/Html/html_lessons/MainPanel";
import MainTasksPanel from "../../pages/WebDeveloper/Html/html_tasks/MainTasksPanel";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <Sidebar />
          <div className="app__home__container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Webdev/lesson_1" element={<HtmlMainPanel />} />
              <Route path="/Webdev/Task_1" element={<MainTasksPanel />} />
              <Route path="/Familiarization" element={<Familiarization />} />
              <Route path="/Salutation" element={<Salutation />} />
              <Route path="/Listlessons" element={<Listlessons />} />
              <Route path="/Userpage" element={<User />} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
