import React, { useRef, useState } from "react";
import "./Contacts.css";
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
				.then(() => {
					toast.success("Message has been sent!", {
						icon: "💬",
						style: {
							borderRadius: "10px",
							background: "#100900",
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
		<section id="contacts" className="contact">
			<h1 className="heading">Contact Me</h1>
			<h5>Get in Touch</h5>
			<div className="container contact__container">
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
						rows="5"
						value={formData.message}
						placeholder="Message"
						onChange={handleChange}
						required
					/>
					<button
						disabled={formData.isDisabled}
						type="submit"
						className="btn btn-primary btn-align">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contacts;
