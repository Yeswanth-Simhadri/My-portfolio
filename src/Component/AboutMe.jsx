import React from 'react';
import image from "../assets/round photo.jpg"

const AboutMe = () => {



    return (
        <div id="About" className='py-20 lg:py-10 lg:p-10'>
            <div className='text-center my-10 lg:my-0'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4'>About Me</h1>
                <p className='text-2xl md:text-4xl pb-10 lg:pb-0 lg:text-5xl text-[#61CE70]'>-----who I am ------</p>
            </div>

            <div className='flex md:p-5  max-h-[700px]  justify-center items-center gap-10 lg:gap-28 flex-col-reverse md:flex-row-reverse  mx-auto mt-20 '>
                <div data-aos="fade-up" className='text-justify md:text-left md:Jw-1/2 space-y-5 lg:w-[700px] text-xl p-4'>
                    <p className="leading-relaxed text-justify">
                    Hi i am Yeswanth, Enthusiastic and dedicated student with a solid foundation in Machine Learning, Mern stack Development, and
                    Data Structures and Algorithms (DSA). I possess strong analytical skills and hands-on experience in
                    developing machine learning models, creating user-friendly web interfaces, and solving complex algorithmic
                    problems. I am adept at working in team environments and eager to learn and adapt to new challenges. 
                    </p>


                    <p className='leading-relaxed text-justify'>
                    Seeking
                    an position to apply my skills in developing innovative solutions and contributing to impactful projects.
                    </p>
                </div>
                <div className="">
					<div
						data-aos="zoom-in"
						className="border-8 hover:translate-y-10 duration-150  p-4 border-[#61CE70] rounded-full w-80 h-80"
					>
						<img
							className="rounded-full h-full object-cover  w-full"
							src={image}
							alt=""
						/>
					</div>
				</div>
            </div>


            
        </div>
    );
};

export default AboutMe;