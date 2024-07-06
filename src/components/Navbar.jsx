import logo from "../assets/mm.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-20 h-20 object-cover" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <NavLink to="https://www.linkedin.com/in/manan-mehra-2755a6205/"><FaLinkedin/></NavLink>
        <NavLink to="https://github.com/Manan2810"><FaGithub /></NavLink>
        <NavLink to="https://www.instagram.com/mananmehra/"><FaInstagram /></NavLink>
        <NavLink to="https://leetcode.com/u/mananmehra330/"><TbBrandLeetcode /></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
