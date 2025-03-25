import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profile from "../assets/profile.jpeg";

const AboutMe = () => {
	const imageRef = useRef(null);

	const handleMouseMove = (e) => {
		const image = imageRef.current;
		const rect = image.getBoundingClientRect();

		const x = e.clientX - rect.left; // Horizontal mouse position within the element
		const y = e.clientY - rect.top; // Vertical mouse position within the element

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * 15; // Tilt on X-axis
		const rotateY = ((centerX - x) / centerX) * 15; // Tilt on Y-axis

		image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	};

	const handleMouseLeave = () => {
		const image = imageRef.current;
		image.style.transform = "rotateX(0) rotateY(0)"; // Reset tilt
	};

	return (
		<motion.section
			id="about-me"
			className="about-me-section"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<div className="about-me-container">
				<div className="about-me-text">
					<h2 className="section-header">
						Hi there, I'm <span className="section-name1">Joseph!</span>
					</h2>
					<p className="about-me-description">
					Former Senior Technical Editor & Manual Tester @ Packt Publishing with 6+ YOE | Selenium | Python | SQL | API Testing | Technical Documentation | Adept at automating testing workflows and optimizing processes with VBA and Python
					</p>
					<p className="about-me-highlight">
						I’m currently brushing up on Playwright and exploring the latest
						trends in technology. When I’m not coding, you’ll find me playing
						badminton or volleyball.
					</p>
				</div>
				<div
					className="about-me-image"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					<img ref={imageRef} src={profile} alt="Your Profile" />
				</div>
			</div>
		</motion.section>
	);
};

export default AboutMe;
