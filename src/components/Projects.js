import React from "react";
import "./Projects.css";
import { motion } from "framer-motion"; // Import CSS for styling

const projects = [
	{
		title: "Windows and Active Directory Home Lab",
		description:
			"Simulated real-world IT support scenarios using Windows, Windows Server, and Kali Linux VMs. Configured Active Directory, Group Policy, and automated bulk user creation using PowerShell.",
	},
	{
		title: "IP Tracking API using JS and Postman",
		description:
			"Developed an API integrating AbuseIPDB, VirusTotal, and IPInfo for IP geolocation and security insights. Automated data retrieval using Python scripts and documented API usage with Postman.",
	},
	{
		title: "Editorial Macros using VBA",
		description:
			"Designed VBA macros for MS Word and Excel to streamline editorial workflows, reducing repetitive tasks like importing templates and removing junk characters, achieving a 20% faster turnaround time.",
	},
	{
		title: "Data Analysis using PostgreSQL and Grafana",
		description:
			"Utilized PostgreSQL for data analysis and Grafana for visualization, enabling informed decision-making. Leveraged LLMs to generate synthetic data for real-world testing scenarios.",
	},
];


const Projects = () => {
	return (
		<motion.section
			id="projects"
			className="projects-section"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<h2 className="section-name">My Projects</h2>
			<div className="projects-grid">
				{projects.map((project, index) => (
					<div className="project-card" key={index}>
						<h3 className="project-title">{project.title}</h3>
						<p className="project-description">{project.description}</p>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Projects;
