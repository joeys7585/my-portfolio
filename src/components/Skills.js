import React from "react";
import { FaHeadset, FaTools, FaServer, FaShieldAlt, FaCode, FaTerminal, FaUserShield, FaFileAlt } from "react-icons/fa"; // Example icons
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
	{
		icon: <FaHeadset />,
		title: "Technical Support & Troubleshooting",
		description:
			"Proficient in diagnosing and resolving software, application, and system issues, ensuring minimal downtime and optimal performance for end users.",
	},
	{
		icon: <FaTools />,
		title: "Incident Management",
		description:
			"Experienced in identifying, logging, and resolving technical incidents efficiently, leveraging ITIL best practices to enhance support workflows.",
	},
	{
		icon: <FaServer />,
		title: "Application Support",
		description:
			"Skilled in maintaining, configuring, and troubleshooting enterprise applications, collaborating with development and infrastructure teams to ensure seamless operation.",
	},
	{
		icon: <FaShieldAlt />,
		title: "System Monitoring & Security",
		description:
			"Experienced in monitoring application and system performance, proactively identifying issues, and implementing security best practices to protect data integrity.",
	},
	{
		icon: <FaCode />,
		title: "Scripting & Automation",
		description:
			"Proficient in using scripting languages (e.g., PowerShell, Python, Bash) to automate repetitive tasks, improve system efficiency, and reduce manual workload.",
	},
	{
		icon: <FaTerminal />,
		title: "IT Automation & Scripting",
		description:
			"Proficient in automating IT tasks using PowerShell, Python, and VBA, streamlining workflows, reducing manual effort, and improving efficiency.",
	},
	{
		icon: <FaUserShield />,
		title: "Cybersecurity & Threat Analysis",
		description:
			"Knowledge of security best practices, IP tracking, and threat intelligence tools like AbuseIPDB and VirusTotal to enhance IT security measures.",
	},
	{
		icon: <FaFileAlt />,
		title: "Technical Documentation & Process Improvement",
		description:
			"Experienced in creating clear, structured documentation for IT processes, automation scripts, and troubleshooting guides to enhance knowledge sharing and support efficiency.",
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
