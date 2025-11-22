import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profile from "../assets/profile.jpeg";
import SkillsRadar from "./SkillsRadar";
import data from "../data.json";

const AboutMe = () => {
	const { aboutMe } = data;

	return (
		<motion.div
			className="bento-card about-card"
			style={{ gridArea: "profile" }}
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="about-top">
				<div className="about-header">
					<div className="image-container">
						<img src={profile} alt={aboutMe.imageAlt} />
					</div>
					<div className="about-intro">
						<h2>{aboutMe.name}</h2>
						<p className="role">{aboutMe.role}</p>
						<div className="status-badge">
							<span className="dot"></span> {aboutMe.status}
						</div>
					</div>
				</div>

				<div className="about-content">
					{aboutMe.description.map((paragraph, index) => (
						<p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
					))}
				</div>
			</div>

			<div className="about-radar">
				<SkillsRadar />
			</div>
		</motion.div>
	);
};

export default AboutMe;
