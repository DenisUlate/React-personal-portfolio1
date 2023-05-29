import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="lg:fixed w-full h-[70px] flex  items-center  bg-[var(--bg-transparent-black)] top-0">
      <div className="lg:w-[1400px] m-auto px-4">
        <nav className="flex flex-col md:flex-row md:justify-between items-center h-[50px]">
          {/* Logo */}
          <div className="absolute left-0 md:relative  px-4">
            <p className="text-white f-title text-2xl">
              About <span className="text-[var(--yellow)] ">Me</span>
            </p>
          </div>
          {/* Menu */}
          <ul className=" hidden md:flex text-gray-400 items-center md:ml-[4rem] md:text-[14px] lg:text-[1rem] ">
            <li className="py-3 md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer">Home</li>
            <li className="py-3 md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer">About</li>
            <li className="py-3 md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer">Services</li>
            <li className="py-3 md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer">Work</li>
            <li className="py-3 md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer">Resume</li>
            <li className="py-3 md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer">Contact</li>
          </ul>
          {/* Hamburger */}
          <div className="md:hidden text-white flex absolute right-4 ">
            {/* Icon */}
            <GiHamburgerMenu size={30} />
          </div>
          {/* mobile Menu */}
          <ul className=" h-screen w-full text-gray-400 md:hidden flex flex-col absolute top-[4.5rem] left-0">
            <li className="w-full  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer">Home</li>
            <li className="w-full  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer">About</li>
            <li className="w-full  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer">Services</li>
            <li className="w-full  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer">Work</li>
            <li className="w-full  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer">Resume</li>
            <li className="w-full  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
