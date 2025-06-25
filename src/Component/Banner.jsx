import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import pdf from "../assets/Yeswanth_Simhadri_Resume.pdf";

import "./banner.css";
import ProfileImage from "../assets/profile-picture.webp.jpg";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false);

  const handleDownload = () => {
    setIsPreparing(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "YeswanthSimhadri_resume.pdf";
      link.click();
      setIsPreparing(false);
    }, 1000);
  };

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M Yeswanth!
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1000,
              "ServiceNow CSA & CAD Certified",
              2000,
              "Data Structures & Algorithms in Java",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-3xl lg:text-4xl text-[#61CE70] block"
          />

          <p className="leading-relaxed text-justify text-lg text-white">
            Tech enthusiast with expertise in Machine Learning, MERN Stack, DSA, and certified in ServiceNow CSA & CAD. I enjoy building intelligent models, seamless web apps, and efficient workflow automation.
          </p>

          <p className="leading-relaxed text-justify text-lg text-white">
            Seeking an opportunity to apply my skills in innovative and impactful projects.
          </p>

          <button
            onClick={handleDownload}
            className="btn mt-4 btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black"
          >
            {isPreparing ? "Preparing to download..." : "Download Resume"}
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="mt-56 sm:mt-64 md:mt-24 lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-150 p-4 border-[#61CE70] rounded-full w-80 h-80"
          >
            <img
              className="rounded-full h-full w-full object-cover"
              src={ProfileImage}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
