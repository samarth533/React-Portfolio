import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        SAMARTH NARAIN SHARMA
      </a>

      <ul className="permalinks">
        <li></li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="socials">
        <a href="https://www.linkedin.com/in/samarth533/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://www.github.com/samarth533/" target="blank">
          <BsGithub />
        </a>
        <a href="https://twitter.com/samarth_533" target="blank">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/samarth533/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://www.instagram.com/sams_acoustics/" target="blank">
          <FaGuitar />
        </a>
        <a href="https://www.youtube.com/@sams_acoustics/" target="blank">
          <BsYoutube />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SamarthNarainSharma. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
