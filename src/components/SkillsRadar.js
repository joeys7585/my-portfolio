import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, animate } from 'framer-motion';
import data from "../data.json";

const TooltipPortal = ({ children }) => {
    const portalRoot = document.getElementById('portal-root') || document.body;
    return ReactDOM.createPortal(children, portalRoot);
};

const SkillsRadar = () => {
    const size = 300;
    const center = size / 2;
    const radius = 100;

    const { axes, data: initialData, tooltips } = data.radar;
    const originalData = initialData; // Values from 0 to 1

    const angleSlice = (Math.PI * 2) / axes.length;

    // Helper to calculate points from value/index
    const getPoint = (value, index) => {
        const angle = index * angleSlice - Math.PI / 2; // Start from top
        const r = radius * value;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        };
    };

    // Initialize points state with calculated positions
    const [points, setPoints] = useState(() =>
        originalData.map((val, i) => getPoint(val, i))
    );

    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    // Drag Logic
    const draggingRef = useRef(null);

    const handleMouseDown = (index, e) => {
        e.preventDefault();
        draggingRef.current = index;

        const handleMouseMove = (moveEvent) => {
            if (draggingRef.current === null) return;

            const svgRect = e.target.closest('svg').getBoundingClientRect();
            const mouseX = moveEvent.clientX - svgRect.left;
            const mouseY = moveEvent.clientY - svgRect.top;

            // Calculate distance from center
            let dx = mouseX - center;
            let dy = mouseY - center;
            let distance = Math.sqrt(dx * dx + dy * dy);

            // Constrain to radius
            if (distance > radius) {
                const angle = Math.atan2(dy, dx);
                dx = Math.cos(angle) * radius;
                dy = Math.sin(angle) * radius;
            }

            setPoints(prev => {
                const newPoints = [...prev];
                newPoints[draggingRef.current] = { x: center + dx, y: center + dy };
                return newPoints;
            });
        };

        const handleMouseUp = () => {
            if (draggingRef.current !== null) {
                const index = draggingRef.current;
                const currentPos = points[index];
                const targetPos = getPoint(originalData[index], index);

                // Bouncy Snap Back Animation
                animate(currentPos.x, targetPos.x, {
                    type: "spring",
                    stiffness: 600, // Higher stiffness for snap
                    damping: 10,    // Lower damping for bounce
                    onUpdate: (v) => {
                        setPoints(prev => {
                            const newPoints = [...prev];
                            newPoints[index] = { ...newPoints[index], x: v };
                            return newPoints;
                        });
                    }
                });

                animate(currentPos.y, targetPos.y, {
                    type: "spring",
                    stiffness: 600,
                    damping: 10,
                    onUpdate: (v) => {
                        setPoints(prev => {
                            const newPoints = [...prev];
                            newPoints[index] = { ...newPoints[index], y: v };
                            return newPoints;
                        });
                    }
                });

                draggingRef.current = null;
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    // Update tooltip position
    const handleMouseEnter = (name, e) => {
        const rect = e.target.getBoundingClientRect();
        setTooltipPos({
            x: rect.left + rect.width / 2,
            y: rect.top
        });
        setHoveredSkill(name);
    };

    // Generate grid points (static)
    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
    const gridPoints = gridLevels.map(level =>
        axes.map((_, i) => getPoint(level, i))
    );

    // Polygon string from dynamic points state
    const polyPoints = points.map(p => `${p.x},${p.y}`).join(" ");

    return (
        <div className="radar-container" style={{ width: size, height: size, position: 'relative' }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Grid Lines */}
                {gridPoints.map((gridPolyPoints, levelIndex) => (
                    <polygon
                        key={levelIndex}
                        points={gridPolyPoints.map(p => `${p.x},${p.y}`).join(" ")}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                    />
                ))}

                {/* Axes Lines */}
                {axes.map((_, i) => {
                    const lineEnd = getPoint(1.0, i);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={lineEnd.x}
                            y2={lineEnd.y}
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Data Polygon */}
                <motion.polygon
                    points={polyPoints}
                    fill="rgba(253, 185, 39, 0.2)"
                    stroke="var(--lakers-gold)"
                    strokeWidth="2"
                />

                {/* Data Points (Dots) */}
                {points.map((p, i) => (
                    <motion.circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r="6"
                        fill="var(--lakers-purple)"
                        stroke="var(--lakers-gold)"
                        strokeWidth="2"
                        style={{ cursor: 'grab' }}
                        whileHover={{ scale: 1.5, cursor: "grab" }}
                        whileTap={{ scale: 1.2, cursor: "grabbing" }}
                        onMouseDown={(e) => handleMouseDown(i, e)}
                        onMouseEnter={(e) => handleMouseEnter(axes[i], e)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    />
                ))}

                {/* Labels */}
                {axes.map((label, i) => {
                    const p = getPoint(1.25, i);
                    return (
                        <text
                            key={i}
                            x={p.x}
                            y={p.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="var(--text-secondary)"
                            fontSize="12"
                            style={{ textTransform: 'uppercase', letterSpacing: '1px', pointerEvents: 'none' }}
                        >
                            {label}
                        </text>
                    );
                })}
            </svg>

            {/* Portal Tooltip */}
            <TooltipPortal>
                <AnimatePresence>
                    {hoveredSkill && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            style={{
                                position: 'fixed',
                                left: tooltipPos.x,
                                top: tooltipPos.y - 10,
                                transform: 'translate(-50%, -100%)',
                                background: 'rgba(18, 18, 18, 0.95)',
                                border: '1px solid var(--lakers-gold)',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                color: '#fff',
                                fontSize: '0.8rem',
                                pointerEvents: 'none',
                                whiteSpace: 'nowrap',
                                zIndex: 99999,
                                boxShadow: '0 4px 15px rgba(253, 185, 39, 0.3)',
                                textAlign: 'center'
                            }}
                        >
                            <strong style={{ color: 'var(--lakers-gold)', display: 'block', marginBottom: '2px' }}>
                                {hoveredSkill}
                            </strong>
                            {tooltips[hoveredSkill]}
                        </motion.div>
                    )}
                </AnimatePresence>
            </TooltipPortal>
        </div>
    );
};

export default SkillsRadar;
