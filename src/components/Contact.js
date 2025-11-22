import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import data from "../data.json";

const Contact = () => {
	const { contact } = data;

	return (
		<motion.div
			className="bento-card contact-card"
			style={{ gridArea: "contact" }}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			viewport={{ once: true }}
		>
			<div className="contact-content-mini">
				<h3>{contact.title}</h3>
				<p>{contact.description}</p>
				<a href={`mailto:${contact.email}`} className="contact-btn">
					{contact.buttonText}
				</a>
			</div>
		</motion.div>
	);
};

export default Contact;
