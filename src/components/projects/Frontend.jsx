import portfolioImg from "../../assets/image/mesfin-portfolio.vercel.app_ (1).png";
import carImg from "../../assets/image/auto-elite.vercel.app_.png";
import moviesImg from "../../assets/image/movieshub-tan.vercel.app_.png";
import weatherImg from "../../assets/image/prodigy-wd-05-ten-theta.vercel.app_.png";

const projects = [
  {
    name: "Personal Portfolio",
    language: "React, CSS",
    link: "https://mesfin-portfolio.vercel.app/",
    image: portfolioImg,
    github: "https://github.com/mesfin61/my-portfolio",
  },
  {
    name: "Car Landing Page",
    language: "React, CSS",
    link: "https://auto-elite.vercel.app/",
    image: carImg,
    github: "https://github.com/mesfin61/PRODIGY_WD_01",
  },
  {
    name: "Movies Hub",
    language: "React, CSS",
    link: "https://movieshub-tan.vercel.app/",
    image: moviesImg,
    github: "https://github.com/mesfin61/movieshub",
  },
  {
    name: "Weather App",
    language: "React, CSS",
    link: "https://prodigy-wd-05-ten-theta.vercel.app/",
    image: weatherImg,
    github: "https://github.com/mesfin61/PRODIGY_WD_05",
  },
];

function Frontend() {
  return (
    <div className="frontend-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
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
                view github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Frontend;
