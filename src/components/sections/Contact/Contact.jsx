import React from 'react';
import './Contact.css';
import MapComponent from './MapComponent';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <header className="section-head">
                    <p className="section-eyebrow">04 — bora trocar uma ideia</p>
                    <h2 className="section-title">Me chama</h2>
                    <p className="contact-subtitle">
                        Tô sempre afim de conversar sobre dados, backend, mapas — ou uma
                        oportunidade nova. Me manda mensagem que eu respondo.
                    </p>
                </header>

                <div className="contact-content">
                    <div className="contact-grid">
                        <a
                            href="mailto:joaoleao.gf@gmail.com"
                            className="contact-card"
                        >
                            <span className="contact-card-label">email</span>
                            <h3>joaoleao.gf@gmail.com</h3>
                            <span className="contact-link">Enviar mensagem ↗</span>
                        </a>

                        <a
                            href="https://github.com/joaoleaogf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <span className="contact-card-label">github</span>
                            <h3>@joaoleaogf</h3>
                            <span className="contact-link">Ver perfil ↗</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/joão-leão-630a94170/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <span className="contact-card-label">linkedin</span>
                            <h3>João Leão</h3>
                            <span className="contact-link">Conectar ↗</span>
                        </a>

                        <div className="contact-card map-card">
                            <div className="map-container">
                                <MapComponent />
                            </div>
                            <div className="map-overlay">
                                <span className="contact-card-label">onde eu tô</span>
                                <p className="location-name">Itajubá, MG</p>
                                <p className="contact-country">Brasil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
