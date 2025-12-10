import React from 'react';
import { skillsCategories } from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Habilidades & Tecnologias</h2>

                <p className="skills-subtitle">
                    Tecnologias e ferramentas que utilizo para criar soluções robustas
                </p>

                <div className="skills-grid">
                    {skillsCategories.map(category => (
                        <div key={category.id} className="skill-category glass-card">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map(skill => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
