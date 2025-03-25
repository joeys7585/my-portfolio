import React, { useState } from "react"; // Import useState
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaFileAlt, FaBars } from "react-icons/fa"; // Import FaBars for the hamburger icon

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false); // State to toggle the menu

	// Toggle function for the menu
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<h1>
					&lt;joey<span className="brand-sub">.codes</span>/&gt;
				</h1>
			</div>
			<div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
				{" "}
				{/* Toggle class when menu is open */}
				<a href="#about-me">About Me</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
			<div className="navbar-icons">
				<a
					href="https://www.linkedin.com/in/joesunil57/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/joeys7585"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
				<a
					href="https://drive.google.com/file/d/1PunmJe2hABvy5-CoNSHUYxKQdAzb2ivJ/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFileAlt />
				</a>
			</div>
			{/* Hamburger Icon */}
			<div className="navbar-toggle" onClick={toggleMenu}>
				<FaBars />
			</div>
		</nav>
	);
};

export default Navbar;
