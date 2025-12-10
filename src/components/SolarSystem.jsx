import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Skills.css';

const SolarSystem = ({ category, skills, iconMap }) => {
    const containerRef = useRef(null);
    const requestRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

    // Config
    const perspective = 800;
    const baseRadius = 160;

    // State for rotation (camera angle)
    // Initial tilt to show 3D effect: rotateX somewhat
    const rotation = useRef({ x: 0.3, y: 0 });
    const targetRotation = useRef({ x: 0.3, y: 0 });

    // Animation loop state
    const t = useRef(0);

    // Initial Planet Positions (evenly distributed)
    const planets = useMemo(() => {
        return skills.map((skill, index) => {
            const angle = (2 * Math.PI * index) / skills.length;
            // Introduce some variance in orbit radius or speed if desired, for now uniform circle
            return {
                ...skill,
                initialAngle: angle,
                speed: 0.002, // Base orbital speed
                radius: baseRadius,
                yOffset: 0 // Could add vertical noise
            };
        });
    }, [skills]);

    // Render state (calculated positions)
    const [projectedPlanets, setProjectedPlanets] = useState([]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastMousePos.x;
        const deltaY = e.clientY - lastMousePos.y;

        targetRotation.current.y += deltaX * 0.005;
        targetRotation.current.x += deltaY * 0.005;

        // Clamp X rotation to avoid flipping upside down too much
        targetRotation.current.x = Math.max(-0.5, Math.min(1.0, targetRotation.current.x));

        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - lastMousePos.x;
        const deltaY = e.touches[0].clientY - lastMousePos.y;

        targetRotation.current.y += deltaX * 0.005;
        targetRotation.current.x += deltaY * 0.005;
        targetRotation.current.x = Math.max(-0.5, Math.min(1.0, targetRotation.current.x));

        setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleEnd = () => setIsDragging(false);

    useEffect(() => {
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);
        return () => {
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchend', handleEnd);
        };
    }, []);

    const animate = () => {
        t.current += 1;

        // Smooth rotation easing
        rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.1;
        rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.1;

        // Auto rotate Y slowly if not dragging
        if (!isDragging) {
            targetRotation.current.y += 0.002;
        }

        const calculated = planets.map(planet => {
            // Orbital Movement
            const currentAngle = planet.initialAngle + (t.current * planet.speed);

            // 3D coordinates (Local space, flat circle)
            let x = Math.cos(currentAngle) * planet.radius;
            let z = Math.sin(currentAngle) * planet.radius;
            let y = planet.yOffset;

            // Apply System Rotation (Camera Transform effectively)

            // Rotate around X axis (Tilt)
            const cosX = Math.cos(rotation.current.x);
            const sinX = Math.sin(rotation.current.x);
            const y1 = y * cosX - z * sinX;
            const z1 = y * sinX + z * cosX;
            y = y1;
            z = z1;

            // Rotate around Y axis (Spin)
            const cosY = Math.cos(rotation.current.y);
            const sinY = Math.sin(rotation.current.y);
            const x2 = x * cosY - z * sinY;
            const z2 = x * sinY + z * cosY;
            x = x2;
            z = z2;

            // Projection
            // Simple perspective projection
            const scale = perspective / (perspective + z);
            const x2d = x * scale;
            const y2d = y * scale;

            return {
                ...planet,
                x: x2d,
                y: y2d,
                // Passing z for z-index sorting
                z: z,
                scale: scale
            };
        });

        // Sort by Z depth so items in back render first (if using simple stacking)
        // However, React render order is fixed by array order unless we sort the array.
        // It's better to use z-index style for performance rather than reordering DOM nodes constantly.
        setProjectedPlanets(calculated);

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [planets, isDragging]);

    return (
        <div
            className="solar-system-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            {/* Center Sun */}
            {/* We project the sun too? Or keep it center? 
               The sun is at (0,0,0). Rotation X/Y keeps it at (0,0,0) usually unless we translate.
               But Z changes with rotation if it wasn't centered perfectly, but here it's 0.0.0.
               Wait, rotating around X/Y of (0,0,0) is stable.
               So Sun stays at center 0,0. scale = 1.
            */}
            <div className="solar-center" style={{ zIndex: 10 }}>
                <div className="center-label">{category.title}</div>
            </div>

            {/* Orbit Ring Visual (Optional, hard to project perfectly with CSS border if tilted 
                so we might skip it or use a simplified SVG overlay if requested.
                For now, let's omit the ring lines or use a static one that fades out.)
            */}

            {projectedPlanets.map((p, i) => (
                <div
                    key={p.name}
                    className="solar-object"
                    style={{
                        transform: `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.scale})`,
                        zIndex: Math.floor(100 - p.z), // Items in front (negative z in this math? wait. perspective + z. if z is negative = closer? )
                        // math: scale = p / (p+z). if z is negative, scale > 1 (closer).
                        // So negative z is closer. Higher z-index.
                        // So zIndex = -z is good.
                        // Or if z is positive (farther), scale < 1. 
                        // So (1000 - z) works.
                        opacity: Math.max(0.4, p.scale * 0.8) // Fade distant items slightly
                    }}
                >
                    <div className="solar-badge">
                        <span className="badge-icon">
                            {iconMap[p.name] || <span className="text-icon">{p.name.substring(0, 2)}</span>}
                        </span>
                        <span className="badge-name">{p.name}</span>
                    </div>
                </div>
            ))}

            {/* Interactive hint */}
            <div className="interaction-hint">Drag to rotate</div>
        </div>
    );
};

export default SolarSystem;
