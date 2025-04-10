import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing assets
import AIconomy from "../assets/websiteThumbnail/AIconomy.png";
import WanderLust from "../assets/websiteThumbnail/WanderLust.png";
import SptifyClone from "../assets/websiteThumbnail/SptifyClone.png";
import assetHexa from "../assets/websiteThumbnail/asset-hexa.webp";
import rock from "../assets/websiteThumbnail/RockPaperScissors.png";
import weather from "../assets/websiteThumbnail/Weather App.png";
import simons from "../assets/websiteThumbnail/SimonsSays.png";
const Projects = () => {
	const Data = [
		{
			title: "Aiconomy",
			description: "A finance tracking system using AI for expense analysis.",
			thumbnailImage: AIconomy,
			category: "FullStack",
			serverLink: "https://github.com/Yeswanth-Simhadri/AIconomy",
			liveLink: "https://bikroyelectronics.web.app/",
		},
		{
			title: "wander Lust",
			description: "A finance tracking system using AI for expense analysis.",
			thumbnailImage: WanderLust,
			category: "FullStack",
			serverLink: "https://github.com/Yeswanth-Simhadri/wanderlust-project",
			liveLink: "https://bikroyelectronics.web.app/",
		},
		{
			title: "Photography",
			description: "A simple HTML & CSS project for showcasing photography.",
			thumbnailImage: WanderLust,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Project-CSS-Photography",
		},
		{
			title: "ML Model Evaluator",
			description: "A graphical tool for evaluating machine learning models.",
			thumbnailImage: assetHexa,
			category: "Machine Learning",
			serverLink: "https://github.com/NFRIDOY/ML-Model-Evaluator",
		},
		{
			title: "ML Model Evaluator",
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
			title: "Simons says game",
			description: "A memory-based game implemented using JavaScript.",
			thumbnailImage: simons,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Simons-Says-Game",
		},
		{
			title: "Rock-Paper-Scissors",
			description: "A memory-based game implemented using JavaScript.",
			thumbnailImage: rock,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/Web-Fun-Rock-Paper-Scissors-Amazon-Card-YouTube-Button",
		},
		{
			title: "whether app",
			description: "A finance tracking system using AI for expense analysis.",
			thumbnailImage: weather,
			category: "FrontEnd",
			serverLink: "https://github.com/Yeswanth-Simhadri/React-Weather-website-",
		},
	];

	const [activeButton, setActiveButton] = useState("All");

	const filteredData = Data.filter((item) => {
		if (activeButton === "All") return true;
		return item.category === activeButton;
	});

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10">
			<div className="sticky -top-5 z-[999] py-5 bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10">Latest projects</h1>

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

			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">
				{filteredData.length > 0 ? (
					filteredData.map((item, inx) => (
						<div
							className={`${
								inx % 2 === 0 ? "lg:flex-row-reverse" : ""
							} flex flex-col lg:flex-row justify-center h-full lg:gap-5`}
							key={inx}
						>
							<div className="lg:w-[700px]">
								<img src={item?.thumbnailImage} alt={item?.title} />
							</div>

							<div className="lg:w-[450px] h-full">
								<div className="min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-4xl">{item?.title}</h1>
									<p className="text-lg mt-5">{item?.description}</p>
								</div>

								<div className="flex justify-between">
									{/* Conditionally render only the available link(s) */}
									{item?.serverLink && !item?.liveLink && (
										<a
											href={item?.serverLink}
											target="_blank"
											rel="noopener noreferrer"
											className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
										>
											<FaGithub /> Server side
										</a>
									)}

									{item?.liveLink && !item?.serverLink && (
										<a
											href={item?.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
										>
											<FaExternalLinkAlt /> Visit website
										</a>
									)}

									{/* If both links exist, show both buttons */}
									{item?.serverLink && item?.liveLink && (
										<>
											<a
												href={item?.serverLink}
												target="_blank"
												rel="noopener noreferrer"
												className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
											>
												<FaGithub /> Git Link
											</a>
											<a
												href={item?.liveLink}
												target="_blank"
												rel="noopener noreferrer"
												className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
											>
												<FaExternalLinkAlt /> Visit website
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
