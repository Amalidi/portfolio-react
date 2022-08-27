import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1EifetsxBwc_tTMR1oujo9q6jsBgpHztU/view?usp=sharing"
        target="_blank"
        className="btn"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
      <a href={"#contact"} className="btn btn-primary">
        Say, Hello...
      </a>
    </div>
  );
};

export default CTA;
