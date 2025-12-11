import React, { lazy } from 'react';
import Reveal from '../components/common/Reveal';

const Hero = lazy(() => import('../components/sections/Hero/Hero'));
const About = lazy(() => import('../components/sections/About/About'));
const Projects = lazy(() => import('../components/sections/Projects/Projects'));
const Skills = lazy(() => import('../components/sections/Skills/Skills'));
const Contact = lazy(() => import('../components/sections/Contact/Contact'));

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
