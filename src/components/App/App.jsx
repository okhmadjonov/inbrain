import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import Footer from "../../components/Footer/Footer";
import "./App.scss";
import Lesson_1 from "../../pages/WebDeveloper/Html/html_lessons/lesson_1/Lesson_1";
import Header from "../Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <div className="sidebar__container">
            <Sidebar />
          </div>
          <div className="home__container">
            {/* <Header /> */}
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/Webdev/lesson_1" element={<Lesson_1 />} />
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
