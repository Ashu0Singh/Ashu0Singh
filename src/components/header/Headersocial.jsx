import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Headersocial = () => {
	return (
		<div className="header__social">
			<div className="lines"></div>
			<a
				href="https://www.linkedin.com/in/shivanshsharma15/"
				target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/shivansh1507" target="_blank">
				<FaGithub />
			</a>
			<a href="https://leetcode.com/shivansh1507/" target="_blank">
				<SiLeetcode />
			</a>
			<div className="lines"></div>
		</div>
	);
};

export default Headersocial;
