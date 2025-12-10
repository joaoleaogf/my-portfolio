import React from 'react';
import { skillsCategories } from '../data/skills';
import SolarSystem from './SolarSystem';
import './Skills.css';

// Importing icons
import { FaNodeJs, FaPython, FaDocker, FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { SiPostgresql, SiNginx, SiNextdotjs, SiSass, SiLeaflet, SiMapbox } from 'react-icons/si';
import { TbApi, TbLogicBuffer } from 'react-icons/tb';
import { BsCpu, BsGlobeAmericas, BsCodeSlash } from 'react-icons/bs';

const Skills = () => {

    // Mapping skill names to icons
    const iconMap = {
        'Node.js': <FaNodeJs />,
        'Python': <FaPython />,
        'Docker': <FaDocker />,
        'Data Processing': <TbLogicBuffer />, // Abstract
        'PostGIS': <BsGlobeAmericas />, // Representation
        'QGIS': <SiLeaflet />, // Representation (Leaflet often used with QGIS)
        'Análise Espacial': <SiMapbox />, // Representation
        'Geocoding': <BsGlobeAmericas />,
        'APIs RESTful': <TbApi />,
        'PostgreSQL': <SiPostgresql />,
        'Nginx': <SiNginx />,
        'Microserviços': <FaLayerGroup />,
        'React': <FaReact />,
        'Angular': <FaAngular />,
        'NextJS': <SiNextdotjs />,
        'Vue.js': <FaVuejs />,
        'JavaScript': <BsCodeSlash />,
        'HTML5/CSS': <FaHtml5 />,
        'Scss': <SiSass />,
        'Git': <FaGitAlt />,
        'Algoritmos': <BsCpu />,
        'Análise de Dados': <FaDatabase />,
        'Arquitetura MVC': <FaLayerGroup />
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Habilidades & <span className="highlight">Tecnologias</span></h2>
                    <p className="skills-subtitle">
                        Um ecossistema tecnológico interativo. Arraste para explorar.
                    </p>
                </header>

                <div className="skills-container-fluid">
                    {skillsCategories.map((category, index) => (
                        <SolarSystem
                            key={category.id}
                            category={category}
                            skills={category.skills}
                            iconMap={iconMap}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
