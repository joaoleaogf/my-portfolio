import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { projects } from '../../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-80px' });
    const reduceMotion = useReducedMotion();

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.technologies.includes(filter));

    const gridVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
        },
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <header className="section-head">
                    <p className="section-eyebrow">02 — o que venho construindo</p>
                    <h2 className="section-title">Projetos</h2>
                    <p className="projects-subtitle">
                        Coisas que construí em ETL, dados geoespaciais e backend — do script
                        pontual ao pipeline que ficou rodando em produção.
                    </p>
                </header>

                {/* Filter Buttons */}
                <div className="projects-filter">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Todos
                    </button>
                    {['Python', 'Node.js', 'ETL', 'PostGIS', 'API'].map(tech => (
                        <button
                            key={tech}
                            className={`filter-btn ${filter === tech ? 'active' : ''}`}
                            onClick={() => setFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Projects Grid — entra com stagger na primeira vez que a seção aparece */}
                <motion.div
                    ref={gridRef}
                    className="projects-grid"
                    variants={gridVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>Nenhum projeto encontrado com esta tecnologia.</p>
                    </div>
                )}

                <div className="projects-footer">
                    <a
                        href="https://github.com/joaoleaogf?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        Ver todos no GitHub ↗
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
