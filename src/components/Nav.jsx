import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

const Nav = () => {
  // Define a state variable 'nav' and a function 'setNav' to update its value
  const [nav, setNav] = useState(false);

  // Define a function 'handleClick' that toggles the value of 'nav' when called
  const handleClick = () => setNav(!nav);

  return (
    <div className=" fixed z-10 w-full h-[80px] flex justify-between  items-center  bg-[var(--bg-transparent-black)] px-4 top-0">
      {/* Logo */}
      <div>
        <a className="text-white f-title text-3xl cursor-pointer">
          About <span className="text-[var(--yellow)] ">Me</span>
        </a>
      </div>

      {/* Menu */}
      <ul className=" hidden md:flex md:text-[14px] lg:text-[1rem] ">
        <li className="py-3 md:px-4 ">
          <Link to="Home" smooth={true} duration={500} offset={-200}>
            Home
          </Link>
        </li>
        <li className="py-3 md:px-4 ">
          <Link to="About" smooth={true} duration={500} offset={-200}>
            About
          </Link>
        </li>
        <li className="py-3 md:px-4 ">
          <Link to="Service" smooth={true} duration={500} offset={-200}>
            Services
          </Link>
        </li>
        <li className="py-3 md:px-4 ">
          <Link to="Work" smooth={true} duration={500} offset={-100}>
            Work
          </Link>
        </li>
        <li className="py-3 md:px-4 ">
          <Link to="Resume" smooth={true} duration={500} offset={-200}>
            Resume
          </Link>
        </li>
        <li className="py-3 md:px-4 ">
          <Link to="Contact" smooth={true} duration={500} offset={-200}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-white flex absolute right-4 ">
        {!nav ? <GiHamburgerMenu size={30} /> : <FiX size={30} />}
      </div>
      {/* mobile Menu */}
      <ul
        className={
          !nav ? "hidden" : "md:hidden absolute top-[5rem] left-0 w-full h-screen bg-[var(--bg-gray-dark)] flex flex-col px-4 "
        }
      >
        <li className="w-full py-6 text-4xl ">
          {" "}
          <Link to="Home" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li className="w-full py-6 text-4xl ">
          {" "}
          <Link to="About" smooth={true} duration={500} offset={-100}>
            About
          </Link>
        </li>
        <li className="w-full py-6 text-4xl ">
          {" "}
          <Link to="Service" smooth={true} duration={500} offset={-100}>
            Services
          </Link>
        </li>
        <li className="w-full py-6 text-4xl ">
          {" "}
          <Link to="Work" smooth={true} duration={500} offset={-100}>
            Work
          </Link>
        </li>
        <li className="w-full py-6 text-4xl ">
          {" "}
          <Link to="Resume" smooth={true} duration={500} offset={-100}>
            Resume
          </Link>
        </li>
        <li className="w-full py-6 text-4xl ">
          {" "}
          <Link to="Contact" smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
