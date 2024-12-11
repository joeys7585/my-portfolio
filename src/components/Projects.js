import React from "react";
import "./Projects.css";
import { motion } from "framer-motion"; // Import CSS for styling

const projects = [
	{
		title: "Maa's Cafe",
		description:
			"Delivering a seamless and personalized food experience, connecting users to their favorite meals with ease and convenience.",
		github: "https://maascafe.netlify.app/", // GitHub link if available
	},
	{
		title: "Dental Wellness",
		description:
			"Empowering patients with easy access to trusted dental services, informative resources, and a seamless booking experience all in one place.",
		github: "https://dentalwellnessbydrceleste.netlify.app/",
	},
	{
		title: "My Portfolio",
		description:
			"Showcasing my skills, projects, and passion for technology through an interactive and visually engaging online portfolio.",
		github: "https://github.com/yourusername/project3",
	},
	{
		title: "My Top Product",
		description:
			"Bringing insightful ideas to life through thoughtful editing and collaboration, creating a compelling read for curious minds.",
		github:
			"https://www.packtpub.com/en-us/product/data-engineering-with-dbt-9781803246284",
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
						<div className="project-links">
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								Project Link
							</a>
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Projects;
