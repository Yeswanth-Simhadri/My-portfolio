import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/js.svg"
import mongoDB from "../assets/icons/mongoDB.svg"
import nodeJs from "../assets/icons/nodeJs.json"
import expressjs from "../assets/icons/expressjs.svg"
import ml from "../assets/icons/ml.webp"
import Lottie from "lottie-react";
import sql from "../assets/icons/sql.jpg"
import CAD from "../assets/icons/CAD.svg"
import git from "../assets/icons/git.jpg"
import aws from "../assets/aws.png"
import python from "../assets/icons/download.png"
import java from "../assets/icons/java.jpg"
import bootstrap from "../assets/icons/Bootstrap_logo.svg.png"
import cLang from "../assets/icons/down.png" // ✅ Ensure this icon exists

const Skills = () => {
	return (
		<div id="Skills" className="mt-44 md:mt-16 lg:mt-12 p-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">My skills</h1>
				<p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">-----what I know ------</p>
			</div>

			<div className="max-w-[1000px] mx-auto">
				<div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-5 pt-10 gap-10 my-10">

					{/* Languages */}
					{[
						{ src: cLang, name: "C Language" },
						{ src: java, name: "Java" },
						{ src: python, name: "Python" },
						{ src: js, name: "JavaScript" },
						{ src: sql, name: "SQL" },
					].map(({ src, name }) => (
						<div key={name}>
							<div className="w-36 h-36 border-2 border-[#61CE70]">
								<img src={src} className="h-full animateSkillImage p-6 mx-auto" alt={name} />
							</div>
							<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">{name}</h1>
						</div>
					))}

					{/* Frontend */}
					{[
						{ src: html, name: "HTML" },
						{ src: css, name: "CSS" },
						{ src: bootstrap, name: "Bootstrap" },
					].map(({ src, name }) => (
						<div key={name}>
							<div className="w-36 h-36 border-2 border-[#61CE70]">
								<img src={src} className="h-full animateSkillImage p-6 mx-auto" alt={name} />
							</div>
							<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">{name}</h1>
						</div>
					))}

					{/* Backend */}
					<div>
						<div className="w-36 h-36 border-2 border-[#61CE70]">
							<Lottie animationData={nodeJs} loop={true} autoplay={true} style={{ width: 'full', height: 'full' }} />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">Node JS</h1>
					</div>

					{[
						{ src: expressjs, name: "ExpressJS" },
						{ src: mongoDB, name: "MongoDB" },
						{ src: ml, name: "ML" },
						{ src: aws, name: "AWS" },
					].map(({ src, name }) => (
						<div key={name}>
							<div className="w-36 h-36 border-2 border-[#61CE70]">
								<img src={src} className="h-full animateSkillImage p-6 mx-auto" alt={name} />
							</div>
							<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">{name}</h1>
						</div>
					))}

					{/* Git */}
					<div>
						<div className="w-36 h-36 border-2 border-[#61CE70]">
							<img src={git} alt="Git" className="h-full animateSkillImage p-6 mx-auto" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">Git</h1>
					</div>

					{/* ServiceNow (CAD used for both) */}
					<div>
						<div className="w-36 h-36 border-2 border-[#61CE70]">
							<img src={CAD} alt="ServiceNow" className="h-full animateSkillImage p-6 mx-auto" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">ServiceNow (CSA & CAD)</h1>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Skills;
