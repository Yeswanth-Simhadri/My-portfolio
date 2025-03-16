import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/js.svg"
import tailwind from "../assets/icons/tailwind.svg"
import redux from "../assets/icons/redux.svg"
import firebase from "../assets/icons/firebase.svg"
import mongoDB from "../assets/icons/mongoDB.svg"
import react from "../assets/icons/react.json"
import nodeJs from "../assets/icons/nodeJs.json"
import expressjs from "../assets/icons/expressjs.svg"
import CSA from "../assets/icons/CSA.svg"
import ml from "../assets/icons/ml.webp"
import Lottie from "lottie-react";
import sql from "../assets/icons/sql.jpg"
import CAD from "../assets/icons/CAD.svg"
import git from "../assets/icons/git.jpg"

const Skills = () => {




	return (
		<div id="Skills" className=" p-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">
					My skills
				</h1>
				<p className="text-2xl  md:text-3xl lg:text-5xl text-[#61CE70]">
					-----what I know ------
				</p>
			</div>

			<div className="max-w-[800px] mx-auto">
				<div className=" grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4   pt-10 gap-10 my-10">
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={html} className="h-full animateSkillImage  p-6 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">HTML</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={css} className=" animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">CSS</h1>
					</div>
					{/* <div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={tailwind} className=" animateSkillImage  p-5 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">Tailwind</h1>
					</div> */}
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={js} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">Javascript</h1>
					</div>



					<div className="">
						<div className="w-36 h-36 border-2 border-[#61CE70] ">
							<Lottie animationData={react} loop={true} autoplay={true} style={{ width: 'full', height: 'full' }} />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">React</h1>
					</div>
					
					
					
					<div className="">
						<div className="w-36 h-36 border-2 border-[#61CE70] ">
							<Lottie animationData={nodeJs} loop={true} autoplay={true} style={{ width: 'full', height: 'full' }} />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">Node Js</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={expressjs} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">expressjs</h1>
					</div>
					
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={mongoDB} className="h-full animateSkillImage  p-5 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">MongoDB</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={ml	} className="h-full animateSkillImage  p-5 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">ML</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={CSA} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">CSA(ServiceNow)</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={CAD} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">CAD(ServiceNow)</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={sql} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">SQL</h1>
					</div>
					<div className="">
						<div className="w-36 h-36  border-2 border-[#61CE70] ">
							<img src={git} className="h-full animateSkillImage  p-8 mx-auto" alt="" />
						</div>
						<h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#61CE70]">git</h1>
					</div>
					

				</div>
			</div>
		</div>
	);
};

export default Skills;
