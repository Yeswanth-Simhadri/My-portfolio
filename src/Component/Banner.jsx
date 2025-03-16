import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import pdf from "../assets/yeswanth_resume.pdf";

import "./banner.css";
import ProfileImage from "../assets/profile-picture.webp.jpg";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false); // Loading state

  const handleDownload = () => {
    setIsPreparing(true); // Set loading state
    // Simulate a small delay for "preparing" (optional)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "YeswanthSimhadri_resume.pdf";
      link.click();
      setIsPreparing(false); // Reset loading state
    }, 1000); // Adjust delay as needed
  };

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M Yeswanth!
          </h1>

          <TypeAnimation
            sequence={[
              "Mern stack Developer",
              1000,
              "ServiceNow CSA Certified",
              2000,
              "Data Structure and Algorithms using Java",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl lg:text-5xl text-[#61CE70] block line"
          />
          <div data-aos="fade-up" className='text-justify md:text-left md:Jw-1/2 space-y-5 lg:w-[700px] text-xl p-4'>
                    <p className="leading-relaxed text-justify">
                    Hi, I’m Yeswanth, a passionate student with expertise in Machine Learning, MERN Stack, Data Structures & Algorithms, and ServiceNow (CSA, CAD certified).  
    I enjoy building intelligent models, developing user-friendly web applications, and automating workflows using ServiceNow.
                    </p>


                    <p className='leading-relaxed text-justify'>
                    Seeking an opportunity to apply my skills in innovative and impactful projects.
                    </p>
                </div>

          <button
            onClick={handleDownload}
            // data-aos="zoom-in"
            className="btn mt-5 btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black "
          >
            {isPreparing ? "Preparing to download..." : "Download Resume"}
          </button>
        </div>
        <div className="mt-24 lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-150 p-4 border-[#61CE70] rounded-full w-80 h-80"
          >
            <img
              className="rounded-full h-full object-cover w-full"
              src={ProfileImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
