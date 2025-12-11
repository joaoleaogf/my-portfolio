import React, { useState } from 'react';
import { projects } from '../../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.technologies.includes(filter));

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projetos em Destaque</h2>

                <p className="projects-subtitle">
                    Confira alguns dos meus projetos que demonstram expertise em ETL, Geoprocessamento e Backend
                </p>

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

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

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
                        Ver todos no GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
