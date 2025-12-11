import React, { useEffect, useRef, useState, useMemo } from 'react';
import { skillsCategories } from '../../../data/skills';
import './Skills.css';

// Importing icons
import { FaNodeJs, FaPython, FaDocker, FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { SiPostgresql, SiNginx, SiNextdotjs, SiSass, SiLeaflet, SiMapbox } from 'react-icons/si';
import { TbApi, TbLogicBuffer } from 'react-icons/tb';
import { BsCpu, BsGlobeAmericas, BsCodeSlash } from 'react-icons/bs';

// Orbiting technologies around a category
const OrbitingSkills = ({ skills, iconMap, time }) => {
    const baseRadius = 120;

    return skills.map((skill, index) => {
        const angle = (2 * Math.PI * index) / skills.length + time * 0.5;
        const x = Math.cos(angle) * baseRadius;
        const y = Math.sin(angle) * baseRadius * 0.4; // Elliptical orbit for 3D effect
        const z = Math.sin(angle);
        const scale = 0.85 + z * 0.15;
        const opacity = 0.7 + z * 0.3;

        // When z > 0, skill is in front of center, so needs higher z-index
        const zIndex = z > 0 ? 100 : 1;

        return (
            <div
                key={skill.name}
                className="orbiting-skill"
                style={{
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                }}
            >
                <div className="solar-badge">
                    <span className="badge-icon">
                        {iconMap[skill.name] || <span className="text-icon">{skill.name.substring(0, 2)}</span>}
                    </span>
                    <span className="badge-name">{skill.name}</span>
                </div>
            </div>
        );
    });
};


const Skills = () => {
    const containerRef = useRef(null);
    const requestRef = useRef();
    const categoriesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const timeRef = useRef(0);

    // Mapping skill names to icons
    const iconMap = {
        'Node.js': <FaNodeJs />,
        'Python': <FaPython />,
        'Docker': <FaDocker />,
        'Data Processing': <TbLogicBuffer />,
        'PostGIS': <BsGlobeAmericas />,
        'QGIS': <SiLeaflet />,
        'Análise Espacial': <SiMapbox />,
        'Geocoding': <BsGlobeAmericas />,
        'APIs RESTful': <TbApi />,
        'PostgreSQL': <SiPostgresql />,
        'Nginx': <SiNginx />,
        'Microserviços': <FaLayerGroup />,
        'React': <FaReact />,
        'Angular': <FaAngular />,
        'NextJS': <SiNextdotjs />,
        'Vue.js': <FaVuejs />,
        'JavaScript': <BsCodeSlash />,
        'HTML5/CSS': <FaHtml5 />,
        'Scss': <SiSass />,
        'Git': <FaGitAlt />,
        'Algoritmos': <BsCpu />,
        'Análise de Dados': <FaDatabase />,
        'Arquitetura MVC': <FaLayerGroup />
    };

    // Physics config
    const config = {
        repulsion: 12000,        // Push between categories
        friction: 0.96,          // Velocity damping (higher = more momentum)
        maxSpeed: 2.5,           // Max velocity
        centerAttraction: 0.0002, // Gentle pull to center
        mouseRepulsion: 20000,   // Mouse pushes categories away
        mouseRadius: 200,        // Mouse influence radius
        wobble: 1.5,             // Organic sine wave movement
        randomPush: 0.08,        // Random impulse strength
        boundaryPadding: 150,    // Keep away from edges
    };

    // Container dimensions
    const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });

    // Initialize categories with physics properties
    const initializeCategories = useMemo(() => {
        const cols = 2;
        const rows = 2;
        const spacingX = 350;
        const spacingY = 350;
        const startX = (containerSize.width - spacingX * (cols - 1)) / 2;
        const startY = (containerSize.height - spacingY * (rows - 1)) / 2;

        return skillsCategories.map((cat, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            return {
                ...cat,
                x: startX + col * spacingX + (Math.random() - 0.5) * 50,
                y: startY + row * spacingY + (Math.random() - 0.5) * 50,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
            };
        });
    }, [containerSize]);

    const [categories, setCategories] = useState([]);
    const [orbitTime, setOrbitTime] = useState(0);

    // Initialize
    useEffect(() => {
        categoriesRef.current = initializeCategories.map(c => ({ ...c }));
        setCategories([...categoriesRef.current]);
    }, [initializeCategories]);

    // Update container size
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerSize({ width: rect.width, height: Math.max(800, rect.height) });
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

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
        const cats = categoriesRef.current;
        const time = Date.now() * 0.001;
        timeRef.current += 0.016; // ~60fps

        const centerX = containerSize.width / 2;
        const centerY = containerSize.height / 2;

        cats.forEach((cat, i) => {
            let fx = 0, fy = 0;

            // 1. Repulsion from other categories
            cats.forEach((other, j) => {
                if (i === j) return;
                const dx = cat.x - other.x;
                const dy = cat.y - other.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);

                if (dist > 0 && dist < 400) {
                    const force = config.repulsion / (distSq + 500);
                    fx += (dx / dist) * force;
                    fy += (dy / dist) * force;
                }
            });

            // 2. Gentle attraction to center
            const dxCenter = centerX - cat.x;
            const dyCenter = centerY - cat.y;
            fx += dxCenter * config.centerAttraction;
            fy += dyCenter * config.centerAttraction;

            // 3. Mouse repulsion
            if (mouseRef.current.active) {
                const mx = cat.x - mouseRef.current.x;
                const my = cat.y - mouseRef.current.y;
                const mouseDist = Math.sqrt(mx * mx + my * my);

                if (mouseDist < config.mouseRadius && mouseDist > 0) {
                    const force = config.mouseRepulsion / (mouseDist * mouseDist + 100);
                    fx += (mx / mouseDist) * force;
                    fy += (my / mouseDist) * force;
                }
            }

            // 4. Add organic wandering movement (multiple frequencies for natural feel)
            const freq1 = time * 0.8 + i * 1.7;
            const freq2 = time * 1.3 + i * 2.3;
            const freq3 = time * 0.5 + i * 0.9;

            fx += Math.sin(freq1) * config.wobble;
            fx += Math.sin(freq2) * config.wobble * 0.6;
            fy += Math.cos(freq1 + 0.5) * config.wobble;
            fy += Math.cos(freq3) * config.wobble * 0.8;

            // 5. Random impulses for unpredictable movement
            if (Math.random() < 0.02) {
                cat.vx += (Math.random() - 0.5) * config.randomPush * 20;
                cat.vy += (Math.random() - 0.5) * config.randomPush * 20;
            }

            // Apply forces
            cat.vx += fx * 0.016;
            cat.vy += fy * 0.016;

            // Apply friction
            cat.vx *= config.friction;
            cat.vy *= config.friction;

            // Clamp velocity
            const speed = Math.sqrt(cat.vx * cat.vx + cat.vy * cat.vy);
            if (speed > config.maxSpeed) {
                cat.vx = (cat.vx / speed) * config.maxSpeed;
                cat.vy = (cat.vy / speed) * config.maxSpeed;
            }

            // Update position
            cat.x += cat.vx;
            cat.y += cat.vy;

            // Soft boundaries
            const pad = config.boundaryPadding;
            if (cat.x < pad) { cat.x = pad; cat.vx *= -0.5; }
            if (cat.x > containerSize.width - pad) { cat.x = containerSize.width - pad; cat.vx *= -0.5; }
            if (cat.y < pad) { cat.y = pad; cat.vy *= -0.5; }
            if (cat.y > containerSize.height - pad) { cat.y = containerSize.height - pad; cat.vy *= -0.5; }
        });

        setCategories(cats.map(c => ({ ...c })));
        setOrbitTime(timeRef.current);
        requestRef.current = requestAnimationFrame(simulate);
    };

    useEffect(() => {
        if (categories.length > 0) {
            requestRef.current = requestAnimationFrame(simulate);
            return () => cancelAnimationFrame(requestRef.current);
        }
    }, [containerSize]);

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Habilidades & <span className="highlight">Tecnologias</span></h2>
                    <p className="skills-subtitle">
                        Um ecossistema tecnológico interativo. Mova o mouse para interagir.
                    </p>
                </header>

                <div
                    className="skills-physics-container"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseLeave}
                >
                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className="floating-category"
                            style={{
                                transform: `translate(${cat.x}px, ${cat.y}px)`,
                                zIndex: 10 + index,
                            }}
                        >
                            {/* Center circle */}
                            <div className="category-center">
                                <div className="center-label">{cat.title}</div>
                            </div>

                            {/* Orbiting skills */}
                            <OrbitingSkills
                                skills={cat.skills}
                                iconMap={iconMap}
                                time={orbitTime}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
