import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
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
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
