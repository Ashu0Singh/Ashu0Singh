import React, { useRef, useState } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contacts = () => {
	const form = useRef();
	const [formData, setFromData] = useState({
		name: "",
		email: "",
		message: "",
		isDisabled: false,
	});

	const sendEmail = (event) => {
		event.preventDefault();
		setFromData((prevValue) => ({
			...prevValue,
			isDisabled: true,
		}));
		try {

			emailjs
				.send(
					process.env.REACT_APP_EMAILJS_SERVICE,
					process.env.REACT_APP_EMAILJS_TEMPLATE,
					{
						from_name: formData.name,
						from_email: formData.email,
						message: formData.message,
					},
					process.env.REACT_APP_EMAILJS_PUBLIC_KEY
				)
				.then((respose) => {
					toast.success("Message has been sent!", {
						icon: "💬",
						style: {
							borderRadius: "10px",
							background: "#333",
							color: "#fff",
						},
					});
					setFromData({
						name: "",
						email: "",
						message: "",
						isDisabled: false,
					});
				})
				.catch((error) => {
					toast.error("There has been an error");
				});
		} catch (error) {
			toast.error("There has been an error");
			console.log(error);
		}
	};

	const handleChange = ({ target: { name, value } }) => {
		setFromData((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	return (
		<section id="contact">
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact_options">
					<article className="contact__option">
						<MdOutlineEmail />
						<h4>Email</h4>
						<h5>shivanshsharma1507@gmail.com</h5>
						<a
							href="shivanshsharma1507@gmail.com"
							target="_blank"
							rel="noopener noreferrer">
							Send a Message
						</a>
					</article>
					<article className="contact__option">
						<BsInstagram />
						<h4>Instagram</h4>
						<h5>Shivansh Sharma</h5>
						<a
							href="https://www.instagram.com/shivanshh_sharmaa/"
							target="_blank"
							rel="noopener noreferrer">
							Send a Message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp />
						<h4>Whatsapp</h4>
						<h5>+91 7052899759</h5>
						<a
							href="https://api.whatsapp.com/send?phone=7052899759"
							target="_blank"
							rel="noopener noreferrer">
							Send a Message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						value={formData.name}
						placeholder="Full Name"
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						name="email"
						value={formData.email}
						placeholder="Email"
						onChange={handleChange}
						required
					/>
					<textarea
						name="message"
						rows="10"
						value={formData.message}
						placeholder="Message"
						onChange={handleChange}
						required
					/>
					<button
						disabled={formData.isDisabled}
						type="submit"
						className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contacts;
