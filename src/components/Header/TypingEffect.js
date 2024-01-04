import "./Header.css";

import Typewriter from "typewriter-effect";

const TextPrinter = (props) => {
  return (
    <div className="type_writer">
      <Typewriter
        options={{
          strings: [
            "FULL-STACK DEVELOPER",
            "SOFTWARE ENGINEER",
            "MEDICAL PHYSIOLOGIST",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TextPrinter;
