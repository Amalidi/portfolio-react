import React from "react";
import "./Header.css";

import HeaderSocials from "./HeaderSocials";
import TypingEffect from "./TypingEffect";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h3>HI THERE 👋, I'M</h3>
          <h4>Amal Idiris</h4>

          <TypingEffect />

          {/* <span> A creative problem solver.</span> */}

          <p></p>
          <CTA />
        </div>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
