import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Contact.css';
import MapComponent from './MapComponent';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Vamos Conversar?</h2>

                <p className="contact-subtitle">
                    Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
                </p>

                <div className="contact-content">
                    <div className="contact-grid">
                        <a
                            href="https://github.com/joaoleaogf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card glass-card"
                        >
                            <div className="contact-icon">
                                <FiGithub size={32} />
                            </div>
                            <h3>GitHub</h3>
                            <p>@joaoleaogf</p>
                            <span className="contact-link">Ver perfil →</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/joão-leão-630a94170/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card glass-card"
                        >
                            <div className="contact-icon">
                                <FiLinkedin size={32} />
                            </div>
                            <h3>LinkedIn</h3>
                            <p>João Leão</p>
                            <span className="contact-link">Conectar →</span>
                        </a>

                        <a
                            href="mailto:seu-email@exemplo.com"
                            className="contact-card glass-card"
                        >
                            <div className="contact-icon">
                                <FiMail size={32} />
                            </div>
                            <h3>Email</h3>
                            <p>Entre em contato</p>
                            <span className="contact-link">Enviar email →</span>
                        </a>

                        <div className="contact-card glass-card map-card">
                            <div className="map-container">
                                <MapComponent />
                            </div>
                            <div className="map-overlay">
                                <h3>Localização</h3>
                                <p className="location-name">Itajubá, MG</p>
                                <p className="contact-country">Brasil 🇧🇷</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta">
                        <p className="cta-text">
                            Interessado em colaborar ou discutir uma oportunidade?
                        </p>
                        <a
                            href="mailto:seu-email@exemplo.com"
                            className="btn btn-primary btn-large"
                        >
                            <FiMail size={20} />
                            Enviar uma mensagem
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
