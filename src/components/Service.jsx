import React from "react";
import { FaBullhorn, FaHubspot } from "react-icons/fa";
import { TfiWindow } from "react-icons/tfi";

const Service = () => {
  return (
    <section name="Service" className=" h-screen w-full  my-[400px] md:my-[300px]">
      {/* Container */}
      <div className="h-fit max-w-[1400px]  mx-auto px-4">
        {/* My services text */}
        <div className="h-fit max-w-md md:max-w-[460px] px-2 pb-12">
          <h2 className="text-[2.6rem] text-white">
            My <span className="text-[var(--yellow)]">Service</span>
          </h2>
          <p className="text-xl text-[var(--clr-gray)] py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate cumque velit architecto earum autem.
          </p>
        </div>

        {/* Grid Cards */}
        <div class="h-fit max-w-md md:max-w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
          {/* Card 1 */}
          <div class="bg-[var(--bg-gray-light)] rounded-xl shadow p-6 flex flex-col items-center justify-center ">
            <div class="flex items-center justify-center">
              <FaBullhorn size={60} color="var(--yellow)" />
            </div>
            <h3 class="text-white text-[1.6rem] font-semibold mt-4">Digital Marketing</h3>
            <p class="text-[var(--clr-gray)] text-[1rem] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dignissimos debitis culpa optio id alias quibusdam
              vel cumque facere reprehenderit!
            </p>
          </div>

          {/* Card 2 */}
          <div class="bg-[var(--bg-gray-light)] rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <div class="flex items-center justify-center">
              <TfiWindow size={60} color="var(--yellow)" />
            </div>
            <h3 class="text-white text-[1.6rem] font-semibold mt-4">Web Devlopment</h3>
            <p class="text-[var(--clr-gray)] text-[1rem] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dignissimos debitis culpa optio id alias quibusdam
              vel cumque facere reprehenderit!
            </p>
          </div>

          {/* Card 3 */}
          <div class="bg-[var(--bg-gray-light)] rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <div class="flex items-center justify-center">
              <FaHubspot size={60} color="var(--yellow)" />
            </div>
            <h3 class="text-white text-[1.6rem] font-semibold mt-4">Creative Graphic Design</h3>
            <p class="text-[var(--clr-gray)] text-[1rem] mt-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dignissimos debitis culpa optio id alias quibusdam
              vel cumque facere reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
