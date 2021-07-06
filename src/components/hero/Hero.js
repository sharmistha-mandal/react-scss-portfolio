//import { KeyboardArrowDown } from "@material-ui/icons";
import "./hero.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="A handsomeMan" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am</h2>
          <h1>Sharmistha</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          {/*
            <KeyboardArrowDown className="icon" />
         */}
          <img src="assets/down.png" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
