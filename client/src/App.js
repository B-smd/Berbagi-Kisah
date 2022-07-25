import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutMePage from './pages/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <Router>
      <Wrapper>
        <Header/>
        <Routes>
          <Route
            path="/React-Portfolio"
            element={<HomePage/>}
          />
          <Route
            path="/"
            element={<HomePage/>}
          />

          <Route
            path="/aboutme"
            element={<AboutMePage/>}
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

