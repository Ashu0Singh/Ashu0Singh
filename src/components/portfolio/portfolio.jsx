import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { PiMonitor } from "react-icons/pi";
import { motion, useInView, useAnimation } from "framer-motion";

const data = [
	{
		id: 1,
		weburl: "www.farmershaat.com/",
		title: "Farmers Haat",
		desc: `Farmers Haat - your online stop for genuine wood-pressed mustard oil. Experience our user-friendly B2C eCommerce platform powered by Strapi.js, offering secure transactions with Razorpay and a seamless journey from rural farms to your home.`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Farmers_Haat.png",
		github: "https://github.com/Ashu0Singh/FarmersHaat",
	},
	{
		id: 2,
		weburl: "www.ashu-singh.me/Prompt-Battle/",
		title: "Prompt Battle",
		desc: `Dive into the AI Prompt Battle – a thrilling platform where contestants engage in a visual showdown, generating stunning images through AI based on unique prompts. Experience the fusion of human imagination and AI creativity, and prepare for a riveting battle of artistic prowess!`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Prompt_Battle.png",
		github: "https://github.com/Ashu0Singh/PromptBattle",
	},
	{
		id: 3,
		weburl: "www.ashu-singh.me/Ecommerce-Web/",
		title: "Ecommerce Website",
		desc: `Explore our newly revamped boat eCommerce platform, designed with MERN stack and Strapi.js for a smooth browsing experience, and secured with Stripe.js for reliable, easy transactions. Finding and purchasing your dream boat has never been more seamless!`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Ecommerce.png",
		github: "https://github.com/Ashu0Singh/E-Commerce",
	},
	{
		id: 4,
		weburl: "www.ashu-singh.me/Space-Tourism/",
		title: "Space Tourism",
		desc: `Explore our newly revamped boat eCommerce platform, designed with MERN stack and Strapi.js for a smooth browsing experience, and secured with Stripe.js for reliable, easy transactions. Finding and purchasing your dream boat has never been more seamless!`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Space_Tourism.png",
		github: "https://github.com/Ashu0Singh/SpaceTourism",
	},
];

const Portfolio = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once : true});
	const mainControls = useAnimation();
	useEffect(() => {
		mainControls.start(isInView && "visible" )
	}, [isInView]);

	return (
		<section id="portfolio" className="portfolio">
			<h1>Portfolio</h1>
			<h5>My Recent Works</h5>
			<div ref={ref} className="portfolio__container">
				{data.map(({ id, url, title, github, weburl, desc }) => {
					return (
						<motion.article
							variants={{
								hidden: { opacity: 0, translateY: 30},
								visible: { opacity: 1, translateY: 0 },
							}}
							key={id}
							initial="hidden"
							animate={mainControls}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={url} alt={title}></img>
							</div>
							<h3>{title}</h3>
							<p className="desc">{desc}</p>
							<div className="button-flex">
								<div className="portfolio__item-cta">
									<a
										href={github}
										className="btn btn-primary ctaBtn"
										target="_blank">
										<AiFillGithub fontSize={24} />
										Github
									</a>
								</div>
								<div className="portfolio__item-cta">
									<a
										href={weburl}
										className="btn btn-primary ctaBtn"
										target="_blank">
										<PiMonitor fontSize={24} />
									</a>
								</div>
							</div>
						</motion.article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;