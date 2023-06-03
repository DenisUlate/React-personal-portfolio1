import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";

const Work = () => {
  return (
    <section name="Work" className="w-full md:h-screen">
      {/* Work container */}
      <div className="max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full px-4">
        {/* Text */}
        <div className="flex flex-col items-center justify-center w-full md:max-w-2xl mx-auto px-4">
          <h2 className="w-full text-center text-white text-4xl font-bold py-8">
            My <span className="text-[var(--yellow)]">Work</span>
          </h2>
          <p className="text-[var(--clr-gray)] text-center text-xl px-8 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet dignissimos nostrum fugiat laborum hic
            minima perferendis provident distinctio.
          </p>
        </div>

        {/* Images - Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-4 h-[2400px] md:h-[700px] gap-4 text-white">
          {/* Child 1 */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 bg-cover bg-center rounded-2xl px-2"
          ></div>
          {/* Child 2 */}
          <div style={{ backgroundImage: `url(${work2})` }} className=" bg-cover bg-center rounded-2xl px-2"></div>
          {/* Child 3 */}
          <div style={{ backgroundImage: `url(${work3})` }} className=" bg-cover bg-center rounded-2xl px-2"></div>
          {/* Child 4 */}
          <div style={{ backgroundImage: `url(${work4})` }} className=" bg-cover bg-center rounded-2xl px-2"></div>
          {/* Child 5 */}
          <div style={{ backgroundImage: `url(${work5})` }} className=" bg-cover bg-center rounded-2xl px-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
