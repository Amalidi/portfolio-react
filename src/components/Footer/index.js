import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <a href="/" className="footer_logo">
          Amal Idiris
        </a>

        <ul className="permalinks">
          <li>
            <a href="#Header">Home</a>
          </li>
          <li>
            <a href="#AboutMe">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="social_media">
          <a
            href={"https://github.com/Amalidi"}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href={"https://www.linkedin.com/in/amal-idiris-b86abb210/"}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href={"mailto:A.idi12@outlook.com"}
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
        <div className="rocket_container">
          <a href="/#" className="rocket">
            <RocketOutlinedIcon className="rocket-img" />
          </a>
          <p className="rocket_p">Beam me up !!!</p>
        </div>
        <div className="copyright">
          <small>&copy; Amalidi. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
