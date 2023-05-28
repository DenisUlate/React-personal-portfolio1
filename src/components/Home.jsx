import React from "react"
import home from "../assets/home.jpg"

const Home = () => {
	return (
		<div className='h-screen w-full'>
			<div className='lg:max-w-[1200px] px-4 flex m-auto justify-between items-center mt-[200px]'>
				{/* text */}
				<div className='max-w-[450px]'>
					<p className='text-[var(--yellow)] f-paragraph'>Hello, Welcome</p>
					<h2 className='text-white text-6xl f-paragraph font-bold'>I'm Anderson Coper</h2>
					<p className='text-gray-400 text-xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam sunt inventore molestias libero quaerat
						voluptate labore in blanditiis facere ut perferendis rem eligendi repellendus quasi facilis, veniam consequuntur qui.
					</p>
					<button className='text-gray-600 font-bold py-4 px-6 rounded-[5px] bg-[var(--yellow)]'>Contact Us</button>
				</div>
				{/* image */}
				<div className='relative'>
					<div style={{ backgroundImage: `url(${home})` }} className='w-[400px] h-[400px] rounded-2xl overflow-hidden'></div>
					<span className=' rounded-2xl border-8 border-solid border-[var(--yellow)] w-[400px] h-[400px] absolute top-6 left-6 -z-10'></span>
				</div>
			</div>
		</div>
	)
}

export default Home
