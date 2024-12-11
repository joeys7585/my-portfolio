import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* Other components like Header */}
			<AboutMe />
			{/* Future sections like Skills, Projects, Contact */}
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
