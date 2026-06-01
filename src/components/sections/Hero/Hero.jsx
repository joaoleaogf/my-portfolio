import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <p className="hero-greeting">oi, prazer 👋</p>

                        <h1 className="hero-title">
                            Eu sou o <span className="hero-name">João</span>.
                        </h1>

                        <p className="hero-statement">
                            Construo <strong>backends</strong>, <strong>pipelines de dados</strong> e
                            <strong> mapas</strong> — e gosto mesmo é da parte chata: deixar o dado
                            limpo, a query rápida e o sistema de pé em produção.
                        </p>

                        <p className="hero-description">
                            Trabalho na DDMX, em Itajubá-MG, com ETL, APIs REST e dashboards de BI
                            (Elasticsearch + Highcharts). Quando sobra tempo, brinco com
                            geoprocessamento e roteirização.
                        </p>

                        <div className="hero-cta">
                            <button onClick={scrollToContact} className="btn btn-primary">
                                Vamos conversar
                            </button>
                            <a
                                href="https://github.com/joaoleaogf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                Ver GitHub ↗
                            </a>
                        </div>

                        <div className="hero-social">
                            <a href="https://github.com/joaoleaogf" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <span className="hero-social-sep">·</span>
                            <a href="https://www.linkedin.com/in/joão-leão-630a94170/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <span className="hero-social-sep">·</span>
                            <a href="mailto:joaoleao.gf@gmail.com">Email</a>
                        </div>
                    </div>

                    <div className="hero-portrait">
                        <div className="hero-portrait-frame">
                            <img
                                src="/images/profile.png"
                                alt="João Leão"
                                className="hero-portrait-img"
                                loading="eager"
                                onError={(e) => { e.currentTarget.parentElement.classList.add('is-empty'); }}
                            />
                            <span className="hero-portrait-placeholder" aria-hidden="true">JL</span>
                        </div>
                        <span className="hero-signature" aria-hidden="true">João</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
