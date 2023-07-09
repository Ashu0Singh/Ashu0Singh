import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";
const Headersocial = () => {
	const initial = {
		translateX: -90,
		opacity: 0,
	};
	const animate = {
		translateX: 0,
		opacity: 1,
	};
	const transition = {
		duration: 0.8,
		delay: 2,
	};
	return (
		<div className="header__social">
			<motion.div
				initial={initial}
				animate={animate}
				transition={transition}
				className="lines"></motion.div>
			<motion.a
				initial={initial}
				animate={animate}
				transition={transition}
				href="https://www.linkedin.com/in/shivanshsharma15/"
				target="_blank">
				<BsLinkedin />
			</motion.a>
			<motion.a
				initial={{ ...initial, translateX: 0 }}
				animate={animate}
				transition={transition}
				href="https://github.com/shivansh1507"
				target="_blank">
				<FaGithub />
			</motion.a>
			<motion.a
				initial={{ ...initial, translateX: 90 }}
				animate={animate}
				transition={transition}
				href="https://leetcode.com/shivansh1507/"
				target="_blank">
				<SiLeetcode />
			</motion.a>
			<motion.div
				initial={{ ...initial, translateX: 90 }}
				animate={animate}
				transition={transition}
				className="lines"></motion.div>
		</div>
	);
};

export default Headersocial;
