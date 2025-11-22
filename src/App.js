import React from "react";
import AboutMe from "./components/AboutMe";
import Social from "./components/Social";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MatrixBackground from "./components/MatrixBackground";
import Cursor from "./components/Cursor";
import "./App.css";

function App() {
	return (
		<div className="App">
			<MatrixBackground />
			<Cursor />
			<AboutMe />
			<Social />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
