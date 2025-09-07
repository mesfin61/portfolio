import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Page.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
