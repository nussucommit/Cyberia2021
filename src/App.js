import React, { Suspense } from "react";

import { Helmet } from "react-helmet";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

import SocialMediaPanel from "./components/SocialMediaPanel";

const About = React.lazy(() => import("./pages/About"));
const Competition = React.lazy(() => import("./pages/Competition"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Schedule = React.lazy(() => import("./pages/Schedule"));

/**
 * React app for Cyberia 2021 organized by NUSSU commIT.
 *
 * @version 1.0.0
 * @author [Desmond To](https://github.com/DesmondTo)
 */
function App() {
  return (
    <MajorContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cyberia 2021</title>
        <link rel="canonical" href="https://www.cyberia2021.nussucommit.com/" />
        <meta name="description" content="NUSSU commIT Cyberia 2021" />
      </Helmet>
      <SocialMediaPanel />
      <Suspense
        fallback={
          <Centered>
            <CircularProgress />
          </Centered>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Competition" element={<Competition />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
