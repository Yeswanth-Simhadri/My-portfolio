import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import hashtekImage from "../assets/aws.png"; // Add your image here

const Internship = () => {
    return (
        <div className='p-10' id='internship'>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                    My Internship
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
                    ----- Where I’ve Worked ------
                </p>
            </div>

            {/* Hashtek Solution Internship */}
            <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10">
                <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center lg:w-1/3 p-10 md:p-5 lg:p-10'>
                    <img src={hashtekImage} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Hashtek Logo" />
                </div>
                <div className='w-full md:w-3/4 lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-white'>AWS Cloud Intern</h1>
                    <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>Hashtek Solution, Vizag | One Month</h2>
                    <h2 className='my-2 lg:hidden text-lg'>Hashtek Solution, Vizag | One Month</h2>

                    <ul className='list-disc mt-5 md:ml-5 space-y-3 md:pl-5'>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <FiCheckCircle className="text-primaryColor" />
                            <span>Gained hands-on experience with AWS services including EC2, S3, RDS, and IAM.</span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <FiCheckCircle className="text-primaryColor" />
                            <span>Deployed and managed cloud-based applications ensuring scalability and security.</span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <FiCheckCircle className="text-primaryColor" />
                            <span>Configured and optimized AWS infrastructure to enhance performance and cost efficiency.</span>
                        </li>
                        <li className='flex items-start gap-3 leading-relaxed'>
                            <FiCheckCircle className="text-primaryColor" />
                            <span>Collaborated on cloud automation using scripting and Infrastructure as Code (IaC).</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Internship;
