import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./assets/page.css";

function Page() {
  return (
    <div className="page-container">
      <nav className="navbar">
        <h1 className="logo">Mesfin.</h1>

        <NavLink
          to="home"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="skills"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Page;
