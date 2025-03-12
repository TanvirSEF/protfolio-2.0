import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/TanvirSEF" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tanvircs/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/tanvirmern/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
