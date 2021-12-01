import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import SocialMediaPanel from "./components/SocialMediaPanel";
import About from "./pages/About";
import Competition from "./pages/Competition";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";

/**
 * React app for Cyberia 2021 organized by NUSSU commIT.
 *
 * @version 1.0.0
 * @author [Desmond To](https://github.com/DesmondTo)
 */
function App() {
  return (
    <MajorContainer>
      <SocialMediaPanel />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Competition" element={<Competition />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MajorContainer>
  );
}

export default App;

const MajorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/images/Darkened Blue Paint.png");
`;
