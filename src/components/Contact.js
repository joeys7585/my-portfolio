import React from "react";
import "./Contact.css";
import { motion } from "framer-motion"; // Import the CSS for styling
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const Contact = () => {
	return (
		<motion.section
			id="contact"
			className="contact-section"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<h2 className="section-title">Contact Me</h2>
			<div className="contact-content">
				<p className="contact-name">Joseph Sunil</p>
				<p className="contact-role">Technical Editor and Product Manager</p>
				<p className="contact-paragraph">
					I am passionate about technology, development, and problem-solving.
					Feel free to reach out to me for collaborations, opportunities, or
					just a chat about tech!
				</p>
			</div>
			<div className="contact-icons">
				<a
					href="https://www.linkedin.com/in/joesunil57/"
					target="_blank"
					rel="noopener noreferrer"
					className="contact-icon"
				>
					<FaLinkedin />
				</a>
				<a href="mailto:suniljoseph765@gmail.com" className="contact-icon">
					<FaEnvelope />
				</a>
				<a
					href="https://github.com/joeys7585"
					target="_blank"
					rel="noopener noreferrer"
					className="contact-icon"
				>
					<FaGithub />
				</a>
				<a href="tel:+917977004436" className="contact-icon">
					<FaPhone />
				</a>
			</div>
		</motion.section>
	);
};

export default Contact;
