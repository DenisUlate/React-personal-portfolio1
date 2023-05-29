import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
	return (
		<div className='h-screen w-full pt-[300px] md:pt-200px'>
			<div className='max-w-[540px] md:max-w-[1200px] px-4 flex m-auto justify-between items-center lg:flex-row md:flex-row  sm:flex-col'>
				{/* text */}
				<div className='max-w-[490px] px-2'>
					<p className='text-[var(--yellow)] f-paragraph'>Hello, Welcome</p>
					<h2 className='text-white text-6xl f-paragraph font-bold pt-6 pb-6'>I'm Anderson Coper</h2>
					<p className='text-gray-400 text-xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam sunt inventore molestias libero quaerat
						voluptate labore in blanditiis facere ut perferendis rem eligendi repellendus quasi facilis, veniam consequuntur qui.
					</p>
					<button className='text-gray-600 font-bold py-4 px-6 rounded-[5px] bg-[var(--yellow)] mt-8'>Contact Us</button>
				</div>
				{/* image */}
				<div className='relative flex max-w-[490px]'>
					<div
						style={{ backgroundImage: `url(${home})` }}
						className='w-[490px] h-[490px] rounded-2xl overflow-hidden lg:scale-100 md:scale-50'
					></div>
					<span className=' rounded-2xl border-8 border-solid border-[var(--yellow)] w-[490px] h-[490px] absolute top-6 left-6 -z-10 lg:scale-100 md:scale-50'></span>
				</div>
			</div>
		</div>
	);
};

export default Home;
