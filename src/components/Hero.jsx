import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    const roles = [
        'Desenvolvedor de Software',
        'Especialista em ETL',
        'Geoprocessamento',
        'Backend Developer'
    ];

    useEffect(() => {
        const role = roles[currentRoleIndex];
        let currentIndex = 0;
        let isDeleting = false;
        let timeout;

        const type = () => {
            if (!isDeleting && currentIndex <= role.length) {
                setDisplayText(role.substring(0, currentIndex));
                currentIndex++;
                timeout = setTimeout(type, 100);
            } else if (!isDeleting && currentIndex > role.length) {
                isDeleting = true;
                timeout = setTimeout(type, 2000);
            } else if (isDeleting && currentIndex > 0) {
                setDisplayText(role.substring(0, currentIndex));
                currentIndex--;
                timeout = setTimeout(type, 50);
            } else if (isDeleting && currentIndex === 0) {
                isDeleting = false;
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        type();
        return () => clearTimeout(timeout);
    }, [currentRoleIndex]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>👋</span> Olá! Eu sou
                    </div>

                    <h1 className="hero-title">
                        João Leão
                    </h1>

                    <div className="hero-subtitle">
                        <span className="typing-text">{displayText}</span>
                        <span className="cursor">|</span>
                    </div>

                    <p className="hero-description">
                        Desenvolvedor com foco em <strong>ETL, Geoprocessamento e Backend</strong>.
                        Transformando dados em insights acionáveis e conectando tecnologia e geografia para resolver problemas reais.
                    </p>

                    <div className="hero-cta">
                        <a
                            href="https://github.com/joaoleaogf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <FiGithub size={20} />
                            Ver GitHub
                        </a>
                        <button
                            onClick={scrollToAbout}
                            className="btn btn-outline"
                        >
                            Conhecer mais
                            <FiArrowDown size={20} />
                        </button>
                    </div>

                    <div className="hero-social">
                        <a
                            href="https://github.com/joaoleaogf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joão-leão-630a94170/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:seu-email@exemplo.com"
                            aria-label="Email"
                        >
                            <FiMail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
