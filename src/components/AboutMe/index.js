import React from "react";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ME from "../../assets/Myself.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MilitaryTechOutlinedIcon className="about__icon" />
              <h5>Experience</h5>
              <small>6 months</small>
            </article>
            <article className="about__card">
              <FolderCopyOutlinedIcon className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hello! My name is Amal Idiris, and I’m a UK based full-stack web
            developer who focuses on writing clean, elegant and efficient code.
            I'm passionate about bringing both the technical and visual aspects
            of digital products to life. I enjoy creating interactive digital
            experiences on the web with code. My ever-growing fascination for
            programming started from a young age and has now developed into a
            serious interest. I have a diverse set of skills ranging from
            developing a simple single static page of plain text by using HTML,
            all the way to creating complex web applications through using CSS
            and javascript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
