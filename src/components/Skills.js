import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import data from "../data.json";

const Skills = () => {
	const { skills } = data;

	return (
		<motion.div
			className="bento-card skills-card"
			style={{ gridArea: "skills" }}
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.1 }}
			viewport={{ once: true }}
		>
			<h3 className="card-title">{skills.title}</h3>
			<div className="skills-matrix">
				{skills.categories.map((category, index) => (
					<div key={index} className="skill-category">
						<h4 className="category-title">{category.title}</h4>
						<div className="skill-chips">
							{category.skills.map((skill, i) => (
								<span key={i} className="skill-chip">{skill}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
