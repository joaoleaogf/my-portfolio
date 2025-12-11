import React, { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

function App() {
    useEffect(() => {
        // Scroll reveal animation
        const revealElements = () => {
            const reveals = document.querySelectorAll('.reveal');

            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealElements);
        revealElements(); // Initial check

        return () => window.removeEventListener('scroll', revealElements);
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
