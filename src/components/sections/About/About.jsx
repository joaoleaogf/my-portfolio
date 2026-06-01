import React from 'react';
import { experience, education, specialties } from '../../../data/skills';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <header className="section-head">
                    <p className="section-eyebrow">01 — um pouco sobre mim</p>
                    <h2 className="section-title">Quem é o João</h2>
                </header>

                <div className="about-content">
                    <div className="about-intro">
                        <p className="about-text">
                            Comecei na DDMX como estagiário em 2021 e fui ficando — hoje sou
                            <strong> Desenvolvedor de Software</strong> por lá. No caminho me apaixonei
                            por <strong>backend</strong>, <strong>ETL</strong> e <strong>geoprocessamento</strong>:
                            gosto de pegar dado bagunçado e transformar em algo que as pessoas
                            realmente conseguem usar.
                        </p>
                        <p className="about-text">
                            No dia a dia escrevo APIs REST, construo pipelines de dados e mantenho
                            dashboards de BI com Elasticsearch e Highcharts. Meu foco é o que não
                            aparece na tela: deixar a solução <strong>robusta, rápida e fácil de manter</strong>.
                        </p>
                    </div>

                    <div className="about-sections">
                        <div className="about-section">
                            <h3 className="about-section-title">Por onde passei</h3>
                            <div className="timeline">
                                {experience.map(exp => (
                                    <div key={exp.id} className={`timeline-item ${exp.current ? 'current' : ''}`}>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <div className="timeline-header">
                                                <h4>{exp.role}</h4>
                                                {exp.current && <span className="current-badge">atual</span>}
                                            </div>
                                            <p className="timeline-company">{exp.company} · {exp.type}</p>
                                            <p className="timeline-period">{exp.period} · {exp.duration}</p>
                                            <p className="timeline-location">{exp.location}</p>
                                            <p className="timeline-description">{exp.description}</p>
                                            {exp.highlights && exp.highlights.length > 0 && (
                                                <ul className="timeline-highlights">
                                                    {exp.highlights.map((highlight, index) => (
                                                        <li key={index}>{highlight}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {exp.skills && exp.skills.length > 0 && (
                                                <div className="timeline-skills">
                                                    {exp.skills.map((skill, index) => (
                                                        <span key={index} className="timeline-skill-tag">{skill}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-section">
                            <h3 className="about-section-title">Formação</h3>
                            <div className="education">
                                {education.map(edu => (
                                    <div key={edu.id} className="education-item">
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

                    <div className="specialties">
                        <h3 className="about-section-title">No que eu mando bem</h3>
                        <div className="specialties-grid">
                            {specialties.map(item => (
                                <div key={item.id} className="specialty-card">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
