import React from 'react';
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
                        <span className="footer-signature" aria-hidden="true">João</span>
                        <p className="footer-tagline">
                            Dado limpo, query rápida, sistema de pé. Feito em Itajubá-MG.
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
                        <h4 className="footer-title">Por aí</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="https://github.com/joaoleaogf" target="_blank" rel="noopener noreferrer">
                                    GitHub ↗
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/joão-leão-630a94170/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn ↗
                                </a>
                            </li>
                            <li>
                                <a href="mailto:joaoleao.gf@gmail.com">
                                    Email ↗
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} João Leão — feito à mão com React.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
