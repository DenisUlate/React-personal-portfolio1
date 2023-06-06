import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Nav = () => {
  // Define a state variable 'nav' and a function 'setNav' to update its value
  const [nav, setNav] = useState(false);

  // Define a function 'handleClick' that toggles the value of 'nav' when called
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[80px] bg-[var(--bg-transparent-black)] fixed z-10 top-0 ">
      <nav className=" h-full max-w-[1400px] flex justify-between  items-center w-full px-6 right-0 left-0 mx-auto ">
        {/* Logo */}
        <div>
          <a href="Home" className="text-white f-title text-3xl cursor-pointer">
            About <span className="text-[var(--yellow)] ">Me</span>
          </a>
        </div>

        {/* Menu */}
        <ul className="text-[var(--clr-text-gray)] hidden md:flex md:text-[14px] lg:text-[1rem] gap-4 h-full items-center ">
          <li className="p-2">
            <Link to="Home" smooth={true} duration={500} offset={-200}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link to="About" smooth={true} duration={500} offset={-200}>
              About
            </Link>
          </li>
          <li className="p-2">
            <Link to="Service" smooth={true} duration={500} offset={-200}>
              Services
            </Link>
          </li>
          <li className="p-2">
            <Link to="Work" smooth={true} duration={500} offset={-200}>
              Work
            </Link>
          </li>
          <li className="p-2">
            <Link to="Resume" smooth={true} duration={500} offset={-200}>
              Resume
            </Link>
          </li>
          <li className="p-2">
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
            !nav ? "hidden" : "md:hidden absolute top-[5rem] left-0 w-full h-screen bg-[var(--bg-gray-dark)] flex flex-col px-4"
          }
        >
          <li className="w-full py-6 text-4xl ">
            {" "}
            <Link onClick={handleClick} to="Home" smooth={true} duration={500} offset={-200}>
              Home
            </Link>
          </li>
          <li className="w-full py-6 text-4xl ">
            {" "}
            <Link onClick={handleClick} to="Home" smooth={true} duration={500} offset={-200}>
              About
            </Link>
          </li>
          <li className="w-full py-6 text-4xl ">
            {" "}
            <Link onClick={handleClick} to="Home" smooth={true} duration={500} offset={-200}>
              Services
            </Link>
          </li>
          <li className="w-full py-6 text-4xl ">
            {" "}
            <Link onClick={handleClick} to="Home" smooth={true} duration={500} offset={-200}>
              Work
            </Link>
          </li>
          <li className="w-full py-6 text-4xl ">
            {" "}
            <Link onClick={handleClick} to="Home" smooth={true} duration={500} offset={-200}>
              Resume
            </Link>
          </li>
          <li className="w-full py-6 text-4xl ">
            {" "}
            <Link onClick={handleClick} to="Home" smooth={true} duration={500} offset={-200}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
