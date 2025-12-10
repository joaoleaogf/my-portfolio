import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card glass-card">
            <div className="project-header">
                <span className="project-emoji">{project.emoji}</span>
                {project.featured && <span className="featured-badge">Destaque</span>}
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights">
                    {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            )}

            <div className="project-technologies">
                {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>

            <div className="project-footer">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    <FiGithub size={18} />
                    Ver código
                    <FiExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
