import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import StoriesPage from './pages/Stories';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';
// import "./App.css";
// import ImageHoverZoom from "./components/imageHoverZoom";

function App() {
  return (
    <Router>
      <Wrapper>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={<HomePage/>}
          />

          <Route
            path="/Stories"
            element={<StoriesPage/>}
          />
          <Route
            path="/projects"
            element={<Projects/>}
          />
          <Route
            path="/resume"
            element={<Resume/>}
          />
          <Route
            path="/contact"
            element={<ContactMe/>}
          />
        </Routes>
        <Footer/>
      </Wrapper>
    </Router>
  );
}

export default App;

