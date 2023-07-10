import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
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
			<a
				href="https://wa.me/8009044664"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}>
				<BsWhatsapp />
			</a>
			<a
				href="mailto:ashusingh1417@outlook.com"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<AiOutlineMail />
			</a>
			<a href="#" className={activeNav === "#" ? "active" : ""}>
				{" "}
				<AiOutlineHome />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActiveNav("#portfolio")}
				className={activeNav === "#portfolio" ? "active" : ""}>
				<RiServiceLine />
			</a>
			<a
				href="#contacts"
				onClick={() => setActiveNav("#contacts")}
				className={activeNav === "#contacts" ? "active" : ""}>
				<BiMessageSquareDetail />
			</a>
		</motion.nav>
	);
};

export default Nav;
