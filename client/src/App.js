import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/Welcome';
import HomePage from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
// import Projects from './pages/Projects';
import Donate from './pages/Donate';
// import ContactMe from './pages/ContactMe';
// import "./App.css";
// import ImageHoverZoom from "./components/imageHoverZoom";

function App() {
  return (
    <Router>
      <Wrapper>
        <Nav/>
        <Routes>
          <Route
            path="/"
            element={<WelcomePage/>}
          />

          <Route
            path="/Home"
            element={<HomePage/>}
          />
          {/* <Route
            path="/projects"
            element={<Projects/>}
          /> */}
          <Route
            path="/donate"
            element={<Donate/>}
          />
          {/* <Route
            path="/contact"
            element={<ContactMe/>}
          /> */}
        </Routes>
        <Footer/>
      </Wrapper>
    </Router>
  );
}

export default App;

