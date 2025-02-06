import React from "react";
import { FaCode, FaBook, FaFolderOpen, FaShieldAlt } from "react-icons/fa"; // Example icons
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
	{
		icon: <FaBook />,
		title: "Technical Writing",
		description:
			"Highly skilled at translating complex technical concepts into user-friendly language with the help of content engineering, visual aids, and more.",
	},
	{
		icon: <FaShieldAlt />,
		title: "Quality Assurance",
		description:
			"Skilled in enhancing content quality and leveraging AI to create tools to reduce editing time by 25% and ensuring alignment with market trends for timely, high-quality deliverables.",
	},
	{
		icon: <FaFolderOpen />,
		title: "Product Management",
		description:
			"Experience with driving new product workflows, optimizing development processes, and delivering market-aligned content solutions that improved efficiency by 30%.",
	},
	{
		icon: <FaCode />,
		title: "Technical Expertise",
		description:
			"Deep understanding of various technologies, including software development, AI, and LLMs, to drive innovation and deliver cutting-edge solutions that meet customer needs.",
	},
];

const Skills = () => {
	return (
		<motion.section
			id="skills"
			className="skills-section"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<h2 className="section-title">Skills</h2>
			<div className="skills-grid">
				{skills.map((skill, index) => (
					<div key={index} className="skill-card">
						<div className="skill-icon">{skill.icon}</div>
						<h3 className="skill-title">{skill.title}</h3>
						<p className="skill-description">{skill.description}</p>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Skills;
