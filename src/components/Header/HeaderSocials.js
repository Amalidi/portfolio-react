import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a
          href={"https://github.com/Amalidi"}
          className="individual_socials"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href={"https://www.linkedin.com/in/amal-idiris-b86abb210/"}
          target="_blank"
          className="individual_socials"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href={"mailto:A.idi12@outlook.com"} className="individual_socials">
          <EmailIcon />
        </a>
      </div>

      <div className="mail-container">
        <a href={"mailto:nishu@duck.com"} className="mail">
          idr.a1813@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
