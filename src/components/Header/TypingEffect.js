import "./Header.css";

import Typewriter from "typewriter-effect";

const TextPrinter = (props) => {
  return (
    <div className="text-printer">
      <Typewriter
        options={{
          strings: ["FULL-STACK DEVELOPER", "SOFTWARE ENGINEER", "", "DANCER"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TextPrinter;
