import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import "./Social.css";
import { motion } from "framer-motion";

const Social = () => {
    return (
        <motion.div
            className="bento-card social-card"
            style={{ gridArea: "social" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h3>Connect</h3>
            <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/joesunil57/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon linkedin"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/joeys7585"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon github"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://drive.google.com/file/d/1PunmJe2hABvy5-CoNSHUYxKQdAzb2ivJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon resume"
                >
                    <FaFileAlt />
                    <span>Resume</span>
                </a>
                <a href="mailto:suniljoseph765@gmail.com" className="social-icon email">
                    <FaEnvelope />
                    <span>Email</span>
                </a>
            </div>
        </motion.div>
    );
};

export default Social;
