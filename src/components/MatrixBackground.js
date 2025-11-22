import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const columns = Math.floor(width / 20);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        // Mouse tracking
        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            ctx.fillStyle = 'rgba(18, 18, 18, 0.05)'; // Fade effect
            ctx.fillRect(0, 0, width, height);

            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(Math.floor(Math.random() * 128));
                const x = i * 20;
                const y = drops[i] * 20;

                // Calculate distance to mouse
                const dx = x - mouse.x;
                const dy = y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Glow effect
                if (distance < 100) {
                    ctx.fillStyle = '#FFFFFF'; // White glow
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = '#FDB927';
                } else {
                    ctx.fillStyle = '#FDB927'; // Lakers Gold
                    ctx.shadowBlur = 0;
                }

                ctx.fillText(text, x, y);
                ctx.shadowBlur = 0; // Reset shadow for next iteration

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: 0.3, // Subtle opacity
                pointerEvents: 'none'
            }}
        />
    );
};

export default MatrixBackground;
