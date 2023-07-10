import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram , BsGithub , BsWhatsapp} from "react-icons/bs";
const footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Ashutosh Singh
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="mailto:ashusingh1417@outlook.com">Email</a>
				</li>
				<li>
					<a href="#contacts">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a href="https://www.github.com/Ashu0Singh/">
					<BsGithub />
				</a>
				<a href="https://wa.me/8009044664/">
					<BsWhatsapp />
				</a>
				<a href="https://www.instagram.com/ashu.simgh/">
					<BsInstagram />
				</a>
				<a href="https://www.linkedin.com/in/ashu-singh101/">
					<BsLinkedin />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy;Ashutosh Singh. ALL rights reserved</small>
			</div>
		</footer>
	);
};

export default footer;
