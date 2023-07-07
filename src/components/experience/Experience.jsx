import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
	return (
		<section id="experience">
			<h2>My Experience</h2>
			<h5>What Skills I Have</h5>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Javascript</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>NodeJS</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__language">
					<h3>Programming Language</h3>
					<div className="experience__content">
						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Java</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="experience_details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>C</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
