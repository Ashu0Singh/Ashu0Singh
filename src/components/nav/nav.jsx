import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<motion.nav
			initial={{ width: "5%" }}
			animate={{ width: "max-content" }}
			transition={{ duration: 1, delay: 2.6 }}>
			<a href="#" className={activeNav === "#" ? "active" : ""}>
				{" "}
				<AiOutlineHome />
			</a>
			<a
				href="#About"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}>
				<AiOutlineUser />
			</a>
			<a
				href="mailto:ashusingh1417@outlook.com"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<AiOutlineMail />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}>
				<RiServiceLine />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}>
				<BiMessageSquareDetail />
			</a>
		</motion.nav>
	);
};

export default Nav;
