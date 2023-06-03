import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <section name="Home" className="h-screen w-full my-[300px] md:my-[200px]">
      <div className="max-w-[540px] md:max-w-[1400px] flex m-auto justify-between items-center flex-col md:flex-row px-8 ">
        {/* text */}
        <div className=" w-[290px] md:w-[690px] pb-4 md:pb-0">
          <p className="text-[var(--yellow)] f-paragraph">Hello, Welcome</p>
          <h2 className="text-white text-6xl f-paragraph font-bold py-8">I'm Anderson Coper</h2>
          <p className="text-[var(--clr-gray)] text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam sunt inventore molestias libero quaerat
            voluptate labore in blanditiis facere ut perferendis rem eligendi repellendus quasi facilis, veniam consequuntur qui.
          </p>
          <button className="text-[var(--bg-black)] bg-[var(--yellow)] hover:bg-[var(--clr-gray)] hover:text-[var(--yellow)] rounded-[5px] font-bold py-4 px-6 mt-8">
            Contact Us
          </button>
        </div>
        {/* image */}
        <div className="relative px-1">
          <div
            style={{ backgroundImage: `url(${home})` }}
            className="w-[290px] h-[290px] md:w-[490px] md:h-[490px] bg-cover rounded-2xl overflow-hidden lg:scale-100 md:scale-50"
          ></div>
          <span className=" rounded-2xl border-8 border-solid border-[var(--yellow)] w-[290px] h-[290px] md:w-[490px] md:h-[490px]  absolute top-6 left-6 -z-10 lg:scale-100 md:scale-50"></span>
        </div>
      </div>
    </section>
  );
};

export default Home;
