import React from "react";

const Resume = () => {
  return (
    <section name="Resume" className="flex justify-center py-[8rem] w-full  bg-[var(--bg-dark)]">
      <container className="max-w-[1400px] px-4">
        {/* Text */}
        <div className="max-w-[750px] pb-16">
          <h2 className="font-title text-[2rem] text-bold text-white">
            My <span className="text-[var(--yellow)]">Experience</span>
          </h2>
          <p className="font-paragraph text-[var(--clr-text-gray)] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias adipisci exercitationem doloremque ipsam
            nemo sed eum cumque aspernatur distinctio.
          </p>
        </div>
        {/* Resume */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="	rounded-xl py-8 px-8 bg-[var(--bg-gray-dark)]">
            <div className="">
              <h2 className="text-white font-title text-xl font-bold ">June-2002 - 2020</h2>
              <h2 className="text-[var(--yellow)] font-title font-bold text-2xl pb-2 pt-2">UX/UI Designer</h2>
              <span className="text-[var(--clr-text-gray)]">Figma</span>
            </div>
            <p className="text-[var(--clr-text-gray)] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore libero totam repudiandae, saepe est?
              Aspernatur error autem quas illum.
            </p>
          </div>
          {/* Card 2 */}
          <div className="	rounded-xl py-8 px-8 bg-[var(--bg-gray-dark)]">
            <div className="">
              <h2 className="text-white font-title text-xl font-bold ">June-2002 - 2020</h2>
              <h2 className="text-[var(--yellow)] font-title font-bold text-2xl pb-2 pt-2">Product Designer</h2>
              <span className="text-[var(--clr-text-gray)]">Adobe Potoshop</span>
            </div>
            <p className="text-[var(--clr-text-gray)] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore libero totam repudiandae, saepe est?
              Aspernatur error autem quas illum.
            </p>
          </div>
          {/* Card 3 */}
          <div className="	rounded-xl py-8 px-8 bg-[var(--bg-gray-dark)]">
            <div className="">
              <h2 className="text-white font-title text-xl font-bold ">June-2002 - 2020</h2>
              <h2 className="text-[var(--yellow)] font-title font-bold text-2xl pb-2 pt-2">Graphic Designer</h2>
              <span className="text-[var(--clr-text-gray)]">Adobe Potoshop</span>
            </div>
            <p className="text-[var(--clr-text-gray)] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore libero totam repudiandae, saepe est?
              Aspernatur error autem quas illum.
            </p>
          </div>
        </div>
      </container>
    </section>
  );
};

export default Resume;
