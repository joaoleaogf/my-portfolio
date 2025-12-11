import React, { Suspense, lazy } from 'react';
const Header = lazy(() => import('./components/layout/Header/Header'));
const Hero = lazy(() => import('./components/sections/Hero/Hero'));
const About = lazy(() => import('./components/sections/About/About'));
const Projects = lazy(() => import('./components/sections/Projects/Projects'));
const Skills = lazy(() => import('./components/sections/Skills/Skills'));
const Contact = lazy(() => import('./components/sections/Contact/Contact'));
const Footer = lazy(() => import('./components/layout/Footer/Footer'));

import Reveal from './components/common/Reveal';
import SEO from './components/common/SEO';

const LoadingFallback = () => (
    <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-dark)'
    }}>
        <div className="loading-spinner" style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--text-secondary)',
            borderTop: '3px solid var(--primary)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

function App() {
    return (
        <div className="App">
            <SEO />
            <Suspense fallback={<LoadingFallback />}>
                <Header />
                <main>
                    <Hero />
                    <Reveal width="100%">
                        <About />
                    </Reveal>
                    <Reveal width="100%">
                        <Projects />
                    </Reveal>
                    <Reveal width="100%">
                        <Skills />
                    </Reveal>
                    <Reveal width="100%">
                        <Contact />
                    </Reveal>
                </main>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
