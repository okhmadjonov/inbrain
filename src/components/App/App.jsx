import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import Familiarization from "../../pages/WebDeveloper/Greeting/Familiarization/Familiarization";
import Salutation from "../../pages/WebDeveloper/Greeting/salutation/salutation";
import Listlessons from "../../pages/WebDeveloper/Greeting/Listlessons/Listlesson";
import User from "../../pages/Home/user/user";
import HtmlMainPanel from "../../pages/WebDeveloper/Html/html_lessons/MainPanel";
import MainTasksPanel from "../../pages/WebDeveloper/Html/html_tasks/MainTasksPanel";
import "./App.scss";
import Tags from "../../pages/Handbook/Html/tags/Tags";
import LessonModal from "../../pages/WebDeveloper/Html/html_lessons/lesson_1/LessonModal";
import Context from "../Context/Context";
import Result from "../../pages/WebDeveloper/Html/html_tasks/results/Task_Result";
import Lessonfour from "../../pages/WebDeveloper/Html/Lessonfour/Listlesson";
const obj = {};
const AppContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;
const AppHomeContainer = styled.div`
  width: 77%;
  height: 100%;
  margin: 0 auto;
`;
function App() {
  return (
    <Context.Provider value={obj}>
      <AppContainer>
        
          <Sidebar />
        
        <AppHomeContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Webdev/lesson_1" element={<HtmlMainPanel />} />
            <Route path="/Webdev/Tags" element={<Tags />} />
            <Route path="/Webdev/Task_1" element={<MainTasksPanel />} />
            <Route path="/Familiarization" element={<Familiarization />} />
            <Route path="/Salutation" element={<Salutation />} />
            <Route path="/Listlessons" element={<Listlessons />} />
            <Route path="/Result" element={<Result />} />
            <Route path="/Userpage" element={<User />} />
            <Route path="/modal" element={<LessonModal />} />
            <Route path="/Lesson4/11" element={<Lessonfour />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </AppHomeContainer>
      </AppContainer>
    </Context.Provider>
  );
}

export default App;
