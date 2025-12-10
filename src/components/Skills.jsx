import React from 'react';
import { skillsCategories } from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Habilidades & <span className="highlight">Tecnologias</span></h2>
                    <p className="skills-subtitle">
                        Um ecossistema tecnológico completo para transformar ideias em realidade.
                    </p>
                </header>

                <div className="skills-grid">
                    {skillsCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className="skill-category glass-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skill-chip">
                                        <div className="skill-content">
                                            <span className="skill-name">{skill.name}</span>
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
