import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Samarth Narain Sharma</h1>
        <h5 className="text-light">
          Your friendly neighbourhood Web Developer
        </h5>
        <h5 className="text-light">
          Freelancer on{" "}
          <a href="https://upwork.com/" target="_blank">
            Upwork
          </a>{" "}
          &{" "}
          <a href="https://freelancer.com/" target="_blank">
            Freelancer
          </a>
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
