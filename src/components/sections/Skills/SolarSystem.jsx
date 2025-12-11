import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Skills.css';

const SolarSystem = ({ category, skills, iconMap }) => {
    const containerRef = useRef(null);
    const requestRef = useRef();
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });

    // Physics config
    const config = {
        centerAttraction: 0.0008,    // Pull towards center
        particleRepulsion: 2500,     // Push between particles
        friction: 0.95,              // Velocity damping
        maxSpeed: 4,                 // Max velocity
        orbitRadius: 140,            // Target orbit distance from center
        orbitForce: 0.001,           // Force to maintain orbit
        mouseRepulsion: 8000,        // Mouse pushes particles away
        mouseRadius: 150,            // Mouse influence radius
        wobble: 0.3,                 // Random movement factor
    };

    // Container dimensions
    const containerSize = 400;
    const centerX = containerSize / 2;
    const centerY = containerSize / 2;

    // Initialize particles with positions and velocities
    const initializeParticles = useMemo(() => {
        return skills.map((skill, index) => {
            const angle = (2 * Math.PI * index) / skills.length;
            const radius = config.orbitRadius + (Math.random() - 0.5) * 40;
            return {
                ...skill,
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                baseAngle: angle,
            };
        });
    }, [skills]);

    // State for rendered particles
    const [particles, setParticles] = useState([]);

    // Initialize particles ref
    useEffect(() => {
        particlesRef.current = initializeParticles.map(p => ({ ...p }));
        setParticles([...particlesRef.current]);
    }, [initializeParticles]);

    // Mouse handlers
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current.active = false;
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top,
            active: true
        };
    };

    // Physics simulation
    const simulate = () => {
        const particles = particlesRef.current;
        const time = Date.now() * 0.001;

        particles.forEach((p, i) => {
            let fx = 0, fy = 0;

            // 1. Attraction to orbit (like a spring to the orbit ring)
            const dx = p.x - centerX;
            const dy = p.y - centerY;
            const distToCenter = Math.sqrt(dx * dx + dy * dy);

            if (distToCenter > 0) {
                // Direction towards center
                const nx = dx / distToCenter;
                const ny = dy / distToCenter;

                // Spring force to maintain orbit radius
                const displacement = distToCenter - config.orbitRadius;
                fx -= nx * displacement * config.orbitForce * 10;
                fy -= ny * displacement * config.orbitForce * 10;

                // Gentle orbital rotation force (tangential)
                const tangentX = -ny;
                const tangentY = nx;
                fx += tangentX * 0.05;
                fy += tangentY * 0.05;
            }

            // 2. Repulsion from other particles
            particles.forEach((other, j) => {
                if (i === j) return;
                const dx = p.x - other.x;
                const dy = p.y - other.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);

                if (dist > 0 && dist < 120) {
                    const force = config.particleRepulsion / (distSq + 100);
                    fx += (dx / dist) * force;
                    fy += (dy / dist) * force;
                }
            });

            // 3. Mouse repulsion
            if (mouseRef.current.active) {
                const mx = p.x - mouseRef.current.x;
                const my = p.y - mouseRef.current.y;
                const mouseDist = Math.sqrt(mx * mx + my * my);

                if (mouseDist < config.mouseRadius && mouseDist > 0) {
                    const force = config.mouseRepulsion / (mouseDist * mouseDist + 50);
                    fx += (mx / mouseDist) * force;
                    fy += (my / mouseDist) * force;
                }
            }

            // 4. Add some organic wobble
            fx += Math.sin(time * 2 + i) * config.wobble;
            fy += Math.cos(time * 2.5 + i * 0.7) * config.wobble;

            // Apply forces to velocity
            p.vx += fx * 0.016; // dt ~16ms
            p.vy += fy * 0.016;

            // Apply friction
            p.vx *= config.friction;
            p.vy *= config.friction;

            // Clamp velocity
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed > config.maxSpeed) {
                p.vx = (p.vx / speed) * config.maxSpeed;
                p.vy = (p.vy / speed) * config.maxSpeed;
            }

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Soft boundary (keep within container)
            const margin = 50;
            if (p.x < margin) { p.x = margin; p.vx *= -0.5; }
            if (p.x > containerSize - margin) { p.x = containerSize - margin; p.vx *= -0.5; }
            if (p.y < margin) { p.y = margin; p.vy *= -0.5; }
            if (p.y > containerSize - margin) { p.y = containerSize - margin; p.vy *= -0.5; }
        });

        setParticles(particles.map(p => ({ ...p })));
        requestRef.current = requestAnimationFrame(simulate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(simulate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div
            className="solar-system-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
        >
            {/* Center Category */}
            <div className="solar-center" style={{ zIndex: 10 }}>
                <div className="center-label">{category.title}</div>
            </div>

            {/* Particles */}
            {particles.map((p, i) => {
                // Calculate distance from center for depth effect
                const dx = p.x - centerX;
                const dy = p.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const scale = 0.85 + (dist / config.orbitRadius) * 0.15;

                return (
                    <div
                        key={p.name}
                        className="solar-object"
                        style={{
                            transform: `translate(${p.x - centerX}px, ${p.y - centerY}px) scale(${scale})`,
                            zIndex: 50 + i,
                            transition: 'none',
                        }}
                    >
                        <div className="solar-badge">
                            <span className="badge-icon">
                                {iconMap[p.name] || <span className="text-icon">{p.name.substring(0, 2)}</span>}
                            </span>
                            <span className="badge-name">{p.name}</span>
                        </div>
                    </div>
                );
            })}

            {/* Interactive hint */}
            <div className="interaction-hint">Move mouse to interact</div>
        </div>
    );
};

export default SolarSystem;
