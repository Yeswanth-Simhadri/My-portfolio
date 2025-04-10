import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
    const form = useRef();
    const [sendBtnMessage, setSendBtnMessage] = useState("Send Email");

    const sendEmail = (e) => {
        e.preventDefault();
        setSendBtnMessage("Sending...");

        emailjs
            .sendForm(
                "service_4pgriez",  // ✅ Your EmailJS service ID
                "template_rprxf3l",  // ✅ Your EmailJS template ID
                form.current,
                "mLEgYgx0fOfkNwpku"  // ✅ Your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    toast.success("Mail sent successfully!", { position: "top-center" });
                    setSendBtnMessage("Email Sent");
                },
                (error) => {
                    console.log("Error sending email:", error.text);
                    toast.error("Failed to send email. Please try again.");
                    setSendBtnMessage("Send Failed");
                }
            );
    };

    return (
        <div id="Contact" className="flex flex-col md:flex-row bg-transparent text-slate-200 justify-around p-10">
            {/* Left Section - Links and Contact */}
            <div className="md:w-1/3">
                {/* Social Links */}
                <div className="flex gap-2 text-xl items-center">
                    <PiLinkSimpleBold className="text-[#61CE70]" size={40} />
                    <div className="flex flex-col">
                        <h1 className="mt-8 mb-2">Links</h1>
                        <div className="text-xl md:text-base flex md:flex-row gap-5 items-center">
                            <a target="_blank" href="https://leetcode.com/u/yeswanth1704/" className="flex items-center gap-2">
                                <SiLeetcode className="text-[#61CE70]" />
                                <span className="hidden md:block">Leetcode</span>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/yeswanth-simhadri-743699289" className="flex items-center gap-2">
                                <FaLinkedin className="text-[#61CE70]" />
                                <span className="hidden md:block">LinkedIn</span>
                            </a>
                            <a target="_blank" href="https://github.com/Yeswanth-Simhadri" className="flex items-center gap-2">
                                <FaGithub className="text-[#61CE70]" />
                                <span className="hidden md:block">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Email Contact */}
                <div className="flex gap-2 my-10 items-center text-2xl">
                    <MdEmail className="text-[#61CE70]" size={40} />
                    <div>
                        <h1>Email</h1>
                        <p className="text-base">yeswanth1704@gmail.com</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="flex gap-2 my-10 items-center text-2xl">
                    <FaLocationDot className="text-[#61CE70]" size={40} />
                    <div>
                        <h1>Permanent Address</h1>
                        <p className="text-base">Rajam, Andhra Pradesh</p>
                    </div>
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="md:w-1/3">
                <h1 className="text-3xl font-bold my-5">Send me an Email</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col gap-6">
                        {/* Hidden Field for Recipient Email */}
                        <input type="hidden" name="to_email" value="yeswanth1704@gmail.com" />

                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            name="from_name"
                            className="input input-bordered w-full max-w-sm border-[#61CE70] bg-gray-800 text-white p-3 rounded-lg"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="from_email"
                            required
                            className="border-[#61CE70] input input-bordered w-full max-w-sm bg-gray-800 text-white p-3 rounded-lg"
                        />
                        <textarea
                            className="textarea h-40 border-[#61CE70] textarea-bordered w-full max-w-sm bg-gray-800 text-white p-3 rounded-lg"
                            name="message"
                            placeholder="Your message"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="btn max-w-sm btn-primary bg-[#61CE70] hover:bg-[#4CAF50] text-black font-bold p-3 rounded-lg transition-transform transform hover:scale-105"
                        >
                            {sendBtnMessage}
                        </button>
                    </div>
                </form>
                <ToastContainer className="mt-10" />
            </div>
        </div>
    );
};

export default Footer;
