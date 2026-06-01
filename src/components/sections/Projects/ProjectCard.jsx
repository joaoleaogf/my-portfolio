import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const ProjectCard = ({ project }) => {
    return (
        <motion.article className="project-card glass-card" variants={cardVariants}>
            <div className="project-media">
                <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                />
                {project.featured && (
                    <span className="featured-badge">destaque</span>
                )}
            </div>

            <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.highlights?.length > 0 && (
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
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Ver projeto <span aria-hidden="true">↗</span>
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Ver código <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
