import React from 'react';
import { experience, education } from '../../../data/skills';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">Sobre Mim</h2>

                <div className="about-content">
                    <div className="about-intro glass-card">
                        <p className="about-text">
                            Olá! Sou <strong>João Leão</strong>, desenvolvedor especializado em <strong>ETL</strong>,
                            <strong> Geoprocessamento</strong> e <strong>Backend</strong>. Atualmente trabalho na <strong>DDMX </strong>
                            como Desenvolvedor de Software, onde transformo dados complexos em soluções acionáveis.
                        </p>
                        <p className="about-text">
                            Minha missão é <strong>conectar tecnologia e geografia</strong> para resolver problemas reais,
                            utilizando ferramentas como Node.js, Python, PostGIS e QGIS para criar pipelines de dados robustos
                            e análises espaciais avançadas.
                        </p>
                    </div>

                    <div className="about-sections">
                        {/* Experience Section */}
                        <div className="about-section">
                            <h3 className="about-section-title">
                                <span className="section-icon">💼</span>
                                Experiência Profissional
                            </h3>
                            <div className="timeline">
                                {experience.map(exp => (
                                    <div key={exp.id} className={`timeline-item ${exp.current ? 'current' : ''}`}>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <div className="timeline-header">
                                                <h4>{exp.role}</h4>
                                                {exp.current && <span className="current-badge">Atual</span>}
                                            </div>
                                            <p className="timeline-company">{exp.company}</p>
                                            <p className="timeline-period">{exp.period} • {exp.duration}</p>
                                            <p className="timeline-location">{exp.location}</p>
                                            <p className="timeline-description">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="about-section">
                            <h3 className="about-section-title">
                                <span className="section-icon">🎓</span>
                                Formação Acadêmica
                            </h3>
                            <div className="education">
                                {education.map(edu => (
                                    <div key={edu.id} className="education-item glass-card">
                                        <div className="education-logo">{edu.logo}</div>
                                        <div className="education-content">
                                            <h4>{edu.degree}</h4>
                                            <p className="education-institution">{edu.institution}</p>
                                            <p className="education-period">{edu.period}</p>
                                            <p className="education-description">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Specialties */}
                    <div className="specialties">
                        <h3 className="about-section-title">
                            <span className="section-icon">💡</span>
                            Minhas Especialidades
                        </h3>
                        <div className="specialties-grid">
                            <div className="specialty-card glass-card">
                                <div className="specialty-icon">⚡</div>
                                <h4>ETL & Pipelines</h4>
                                <p>Criação de pipelines robustos para processamento de grandes volumes de dados</p>
                            </div>
                            <div className="specialty-card glass-card">
                                <div className="specialty-icon">🗺️</div>
                                <h4>Geoprocessamento</h4>
                                <p>Análise espacial, geocodificação e visualização de dados geográficos</p>
                            </div>
                            <div className="specialty-card glass-card">
                                <div className="specialty-icon">⚙️</div>
                                <h4>Backend</h4>
                                <p>Desenvolvimento de APIs RESTful, microserviços e arquiteturas escaláveis</p>
                            </div>
                            <div className="specialty-card glass-card">
                                <div className="specialty-icon">📊</div>
                                <h4>Análise Espacial</h4>
                                <p>Transformação de dados em insights através de análises geoespaciais</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
