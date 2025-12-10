import React from 'react';
import { FiHeart, FiGithub } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-brand">João Leão</h3>
                        <p className="footer-tagline">
                            Transformando dados em insights acionáveis
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Navegação</h4>
                        <ul className="footer-links">
                            <li><button onClick={() => scrollToSection('home')}>Início</button></li>
                            <li><button onClick={() => scrollToSection('about')}>Sobre</button></li>
                            <li><button onClick={() => scrollToSection('projects')}>Projetos</button></li>
                            <li><button onClick={() => scrollToSection('skills')}>Habilidades</button></li>
                            <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Redes Sociais</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="https://github.com/joaoleaogf" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/joão-leão-630a94170/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} João Leão. Feito com <FiHeart className="heart-icon" /> e React
                    </p>
                    <p className="footer-tech">
                        <FiGithub /> Código aberto no GitHub
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
