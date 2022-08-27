import React from "react";
import "./Projects.css";

import { data } from "./demoProjectArray";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent works.</h5>
      <h2>Projects</h2>

      <div className="container githubRepo_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="githubRepo_item">
              <div className="gitProject_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="githubRepo_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
