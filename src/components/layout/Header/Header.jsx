import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            if (isHomePage) {
                // Update active section based on scroll position only on homepage
                const sections = ['home', 'about', 'projects', 'skills', 'contact'];

                // Find which section is currently most visible
                let currentSection = 'home';
                let minDistance = Infinity;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const sectionTop = rect.top;

                        // Check if section top is at or above the detection line (150px from top)
                        // and the section is still visible
                        if (sectionTop <= 150 && rect.bottom > 0) {
                            const distance = Math.abs(sectionTop - 150);
                            if (sectionTop <= 150) {
                                currentSection = section;
                            }
                        }
                    }
                }

                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const handleNavigation = (sectionId) => {
        setIsMobileMenuOpen(false);

        if (sectionId === 'blog') {
            navigate('/blog');
            return;
        }

        if (!isHomePage) {
            navigate('/');
            // Wait for navigation to complete then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navItems = [
        { id: 'home', label: 'Início' },
        { id: 'about', label: 'Sobre' },
        { id: 'projects', label: 'Projetos' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contato' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <div className="nav-brand" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>
                        <span className="brand-text">João Leão</span>
                        <span className="brand-tag">Developer</span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="nav-menu">
                        {navItems.map(item => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleNavigation(item.id)}
                                    className={`nav-link ${activeSection === item.id && isHomePage && item.id !== 'blog'
                                        ? 'active'
                                        : (item.id === 'blog' && location.pathname === '/blog' ? 'active' : '')
                                        }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* GitHub Link */}
                    <a
                        href="https://github.com/joaoleaogf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        aria-label="GitHub Profile"
                    >
                        <FiGithub size={24} />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <ul>
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleNavigation(item.id)}
                                        className={`mobile-nav-link ${activeSection === item.id && isHomePage && item.id !== 'blog'
                                            ? 'active'
                                            : (item.id === 'blog' && location.pathname === '/blog' ? 'active' : '')
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
