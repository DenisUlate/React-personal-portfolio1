import React from "react";

function Contact() {
  return (
    <section name="Contact" className="w-full h-screen flex justify-center items-center">
      <div className="md:w-[1400px] px-4">
        {/* text container */}
        <div className="max-w-[870px] flex flex-col text-center justify-center mx-auto">
          <h2 className="w-full font-title text-[2rem] text-bold text-white">
            Contact <span className="text-[var(--yellow)]">Me</span>
          </h2>
          <p className="w-full font-paragraph text-[var(--clr-text-gray)] pt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id fugit corporis maxime harum incidunt a voluptates modi
            exercitationem ab beatae?
          </p>
        </div>
        {/* form container */}
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 md:justify-between">
          {/* contact info */}
          <div className="w-full md:max-w-[435px] px-2 pt-16">
            <p className="font-paragraph text-[var(--clr-text-gray)] mt-2">
              <span className="text-[1.5rem] text-bold text-[var(--yellow)] pr-4">Adress:</span>23 S 80 Road, Benedict,ne, 68316
              United States
            </p>
            <p className="font-paragraph text-[var(--clr-text-gray)] mt-2">
              <span className="text-[1.5rem] text-bold text-[var(--yellow)] pr-4">Phone:</span>+01 123 456 789
            </p>
            <p className="font-paragraph text-[var(--clr-text-gray)] mt-2">
              <span className="text-[1.5rem] text-bold text-[var(--yellow)] pr-4">E mail:</span>abc.xyz@gmail.com
            </p>
            <p className="font-paragraph text-[var(--clr-text-gray)] mt-2">
              <span className="text-[1.5rem] text-bold text-[var(--yellow)] pr-4">Website:</span>www.abc.xyz.com
            </p>
          </div>
          {/* form */}
          <div className="w-full md:max-w-[655px] px-2 pt-16">
            <form className="w-full flex flex-col">
              <input type="text" placeholder="Name" className="rounded-md p-2 " />
              <textarea id="message" name="message" placeholder="Message" rows="6" className="rounded-md p-2 mt-8"></textarea>
              <input
                type="submit"
                value="Contact Us"
                className="text-black bg-[var(--yellow)] rounded-xl px-2 py-3 mt-8 w-[125px] hover:bg-[var(--bg-gray-dark)] hover:text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
