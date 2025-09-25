import { FaGithub } from "react-icons/fa";
import myway from "../../assets/image/myway.png";
import admin from "../../assets/image/admin.png";
import "../../assets/projects.css";

const projects = [
  {
    name: "myway learning platform",
    language: "react js, express js, mysql, css",
    link: "",
    image: myway,
    github: "https://github.com/mesfin61/my-first-fullstack",
  },
  {
    name: "admin dashboard for my learning platform",
    language: "react js, express js, mysql, css",
    link: "",
    image: admin,
    github: "https://github.com/mesfin61/myway-admin-dashboard",
  },
];

function Fullstack() {
  return (
    <div className="fullstack-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />
          )}

          <div className="project-info">
            <h2>{project.name}</h2>
            <p>{project.language}</p>
          </div>

          <div className="link-button">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>

            <a href={project.github} className="project-repo">
              <FaGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fullstack;
