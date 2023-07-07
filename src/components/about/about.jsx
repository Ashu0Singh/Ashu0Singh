import React from "react";
import "./about.css";

const about = () => {
	return (
		<section className="aboutme" id="About">
			<h1>About me</h1>
			<h5>Get to Know</h5>
			<div className="container about__container">
				<div className="about__content">
					<p>
						I'm a third-year BTech Computer Science student at
						Vellore Institute of Technology, Amaravati, specializing
						in front-end development and UI design. Skilled in
						React.js and Figma, I build interactive, appealing web
						applications. Continuously refining my abilities through
						personal projects, I aim to advance in my developer and
						designer roles.
					</p>
				</div>
			</div>
		</section>
	);
};

export default about;
