import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/samarth533/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/samarth533/" target="blank">
        <BsGithub />
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
  );
};

export default HeaderSocials;
