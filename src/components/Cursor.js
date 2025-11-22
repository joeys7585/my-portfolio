import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    // Check for hover over links/buttons
    useEffect(() => {
        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, .bento-card, .skill-item, .project-item").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHovered(true));
                el.addEventListener("mouseout", () => setLinkHovered(false));
            });
        };

        handleLinkHoverEvents();
    }, []);

    const cursorClasses = `cursor ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""} ${linkHovered ? "cursor--link-hovered" : ""}`;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default Cursor;
