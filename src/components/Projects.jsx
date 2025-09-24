import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-button">
        <NavLink to={"/projects/Frontend"}>Frontend</NavLink>
        <NavLink to={"/projects/Fullstack"}>Fullstack</NavLink>
      </div>
      <div className="projects-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
