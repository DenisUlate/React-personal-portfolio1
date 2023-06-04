import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* container */}
      <div className="h-auto max-w-screen-md flex flex-col items-center mx-auto my-6">
        <h2 className="w-full text-center text-white text-[2rem] font-bold">AboutMe.</h2>
        <p className="text-center text-[1rem] text-[var(--clr-text-gray)] py-2 my-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sunt ex id, laboriosam deleniti rerum eaque modi
          veritatis ut ullam!
        </p>
        {/* social links */}
        <div className="flex text-[2rem] text-[var(--yellow)] gap-4">
          <BsFacebook />
          <BsTwitter />
          <BsLinkedin />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
