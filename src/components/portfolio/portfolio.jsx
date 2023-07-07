import React from "react";
import "./portfolio.css";
const data = [
	{
		id: 1,
		image: IMG1,
		title: "Farmers Haat",
		github: "https://github.com/shivansh1507/Project-Bankist",
	},
	{
		id: 2,
		image: IMG2,
		title: "Prompt Battle",
		github: "https://github.com/shivansh1507/Project-Mapty",
	},
	{
		id: 3,
		image: IMG3,
		title: "Ecommerce Website",
		github: "",
	},
	{
		id: 4,
		image: IMG4,
		title: "Space Tourism",
		github: "https://shivansh1507.github.io/shivanshsharma.github.io/",
	},
];

const portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<h1>Portfolio</h1>
			<h5>My Recent Works</h5>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, github }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title}></img>
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn btn-primary"
									target="_blank">
									Github
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default portfolio;
