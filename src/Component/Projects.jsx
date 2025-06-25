import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import AIconomy from "../assets/websiteThumbnail/AIconomy.png";
import photo from "../assets/websiteThumbnail/photo.png";
import WanderLust from "../assets/websiteThumbnail/WanderLust.png";
import SptifyClone from "../assets/websiteThumbnail/SptifyClone.png";
import assetHexa from "../assets/websiteThumbnail/asset-hexa.webp";
import rock from "../assets/websiteThumbnail/RockPaperScissors.png";
import weather from "../assets/websiteThumbnail/Weather App.png";
import simons from "../assets/websiteThumbnail/SimonsSays.png";

const Projects = () => {
	const Data = [
		{
			title: "Wander Lust",
			description: "Travel listing web app built with EJS and MongoDB.",
			thumbnailImage: WanderLust,
			category: "FullStack",
			serverLink: "https://github.com/Yeswanth-Simhadri/wanderlust-project",
			liveLink: "https://bikroyelectronics.web.app/",
		},
		{
			title: "Aiconomy",
			description: "A finance tracking system using AI for expense analysis.",
			thumbnailImage: AIconomy,
			category: "FullStack",
			serverLink: "https://github.com/Yeswanth-Simhadri/AIconomy",
		},
		{
			title: "Photography",
			description: "A simple HTML & CSS project for showcasing photography.",
			thumbnailImage: photo,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Project-CSS-Photography",
		},
		{
			title: "Movie Recomandation System",
			description: "A graphical tool for evaluating machine learning models.",
			thumbnailImage: assetHexa,
			category: "Machine Learning",
			serverLink: "https://github.com/NFRIDOY/ML-Model-Evaluator",
		},
		{
			title: "Spotify clone",
			description: "A responsive React app with authentication & animations.",
			thumbnailImage: SptifyClone,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Spotify-clone-CSS-HTML",
		},
		{
			title: "Simons Says Game",
			description: "A memory-based game implemented using JavaScript.",
			thumbnailImage: simons,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Simons-Says-Game",
		},
		{
			title: "Rock-Paper-Scissors",
			description: "A fun classic game using HTML, CSS, and JavaScript.",
			thumbnailImage: rock,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Web-Fun-Rock-Paper-Scissors-Amazon-Card-YouTube-Button",
		},
		{
			title: "Weather App",
			description: "A weather forecast web app using OpenWeather API.",
			thumbnailImage: weather,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/React-Weather-website-",
		},
	];

	const [activeButton, setActiveButton] = useState("All");

	const filteredData = Data.filter((item) =>
		activeButton === "All" ? true : item.category === activeButton
	);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10">
			<div className="sticky -top-5 z-[999] py-5 bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10">Latest Projects</h1>

				<div className="flex flex-wrap bg-black justify-center gap-5">
					{["All", "FrontEnd", "FullStack", "Machine Learning"].map((category) => (
						<button
							key={category}
							onClick={() => setActiveButton(category)}
							className={`${
								activeButton === category ? "bg-[#61CE70] text-black" : ""
							} btn lg:px-8 rounded-md hover:bg-[#61CE70] hover:text-black btn-outline hover:border-none text-[#61CE70]`}
						>
							{category}
						</button>
					))}
				</div>
			</div>

			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-16">
				{filteredData.length > 0 ? (
					filteredData.map((item, inx) => (
						<div
							key={inx}
							className={`flex flex-col-reverse lg:flex-row items-center justify-center gap-10 ${
								inx % 2 === 0 ? "lg:flex-row-reverse" : ""
							}`}
						>
							{/* Image */}
							<div className="w-full lg:w-1/2 max-w-[600px]">
								<img
									src={item?.thumbnailImage}
									alt={item?.title}
									className="rounded-xl w-full object-cover shadow-lg"
								/>
							</div>

							{/* Description */}
							<div className="w-full lg:w-1/2 max-w-[600px]">
								<div className="min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-3xl font-bold">{item?.title}</h1>
									<p className="text-lg mt-5">{item?.description}</p>
								</div>

								<div className="flex gap-4 mt-4 flex-wrap">
									{item?.serverLink && !item?.liveLink && (
										<a
											href={item.serverLink}
											target="_blank"
											rel="noopener noreferrer"
											className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
										>
											<FaGithub /> Git Link
										</a>
									)}
									{item?.liveLink && !item?.serverLink && (
										<a
											href={item.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
										>
											<FaExternalLinkAlt /> Visit Website
										</a>
									)}
									{item?.serverLink && item?.liveLink && (
										<>
											<a
												href={item.serverLink}
												target="_blank"
												rel="noopener noreferrer"
												className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
											>
												<FaGithub /> Git Link
											</a>
											<a
												href={item.liveLink}
												target="_blank"
												rel="noopener noreferrer"
												className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
											>
												<FaExternalLinkAlt /> Visit Website
											</a>
										</>
									)}
								</div>
							</div>
						</div>
					))
				) : (
					<h2 className="text-center text-2xl text-red-500">No projects found!</h2>
				)}
			</div>
		</div>
	);
};

export default Projects;
