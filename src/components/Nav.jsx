import React from "react"

const Nav = () => {
	return (
		<div className='fixed w-full h-[80px] flex  items-center px-4 bg-[var(--bg-black)]'>
			<div className='lg:w-[1200px] flex justify-between m-auto px-4 py-4 h-full items-center'>
				<div>
					<p className='text-white f-title text-2xl'>
						About <span className='text-[var(--yellow)] '>Me</span>
					</p>
				</div>
				<ul className='flex text-gray-400 gap-2 item-center md:px-4 '>
					<li className='px-2 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Home</li>
					<li className='px-2 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>About</li>
					<li className='px-2 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Services</li>
					<li className='px-2 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Work</li>
					<li className='px-2 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Resume</li>
					<li className='px-2 lg:px-4 f-paragraph hover:text-[#fff] cursor-pointer'>Contact</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav
