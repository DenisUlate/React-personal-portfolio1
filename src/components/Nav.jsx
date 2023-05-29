import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
	return (
		<div className='lg:fixed w-full h-[80px] flex  items-center px-4 bg-[var(--bg-transparent-black)] top-0'>
			<div className='lg:w-[1200px] flex justify-between m-auto px-4 py-4 h-full items-center'>
				{/* Logo */}
				<div className='absolute left-24 md:relative md:left-0'>
					<p className='text-white f-title text-2xl'>
						About <span className='text-[var(--yellow)] '>Me</span>
					</p>
				</div>
				{/* Menu */}
				<ul className=' w-[490px] md:w-[560px] md:justify-end text-gray-400 gap-2 item-center md:ml-[4rem] md:text-[14px] lg:text-[1rem] hidden md:flex  '>
					<li className=' md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Home</li>
					<li className=' md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>About</li>
					<li className=' md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Services</li>
					<li className=' md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Work</li>
					<li className=' md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Resume</li>
					<li className=' md:px-4 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Contact</li>
				</ul>
				{/* Hamburger */}
				<div className='md:hidden absolute top-5 right-24 text-white '>
					{/* Icon */}
					<GiHamburgerMenu size={30} />
				</div>
				{/* Mobile Menu */}
				<ul className=' text-gray-400 md:hidden flex flex-col absolute top-14 left-0 w-full h-screen px-24'>
					<li className='  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer'>Home</li>
					<li className='  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer'>About</li>
					<li className='  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer'>Services</li>
					<li className='  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer'>Work</li>
					<li className='  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer'>Resume</li>
					<li className='  px-2 py-3 f-paragraph hover:text-[#fff] cursor-pointer'>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
