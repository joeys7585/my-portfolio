import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import data from "../data.json";

const Projects = () => {
	const { projects } = data;

	return (
		<motion.div
			className="bento-card projects-card"
			style={{ gridArea: "projects" }}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			viewport={{ once: true }}
		>
			<h3 className="card-title">{projects.title}</h3>
			<div className="projects-grid-mini">
				{projects.items.map((project, index) => (
					<div className="project-item" key={index}>
						<h4 className="project-title">{project.title}</h4>
						<p className="project-desc">{project.description}</p>
						<div className="project-tags">
							{project.tags.map((tag, i) => (
								<span key={i} className="tag">{tag}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Projects;
