import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import HtmlMainPanel from "../../pages/WebDeveloper/Html/html_lessons/MainPanel";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <div className="sidebar__container">
            <Sidebar />
          </div>
          <div className="home__container">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/Webdev/lesson_1" element={<HtmlMainPanel />} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
            <div className="footer__container">{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
