import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { skillsCategories } from '../../../data/skills';
import './Skills.css';

const Skills = () => {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-80px' });
    const reduceMotion = useReducedMotion();

    const gridVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <header className="section-head">
                    <p className="section-eyebrow">03 — minha caixa de ferramentas</p>
                    <h2 className="section-title">Com o que eu trabalho</h2>
                    <p className="skills-subtitle">
                        Não acredito muito em barrinha de porcentagem. Aqui está, na real,
                        o que uso no dia a dia — agrupado por onde costumo aplicar.
                    </p>
                </header>

                <motion.div
                    ref={gridRef}
                    className="skills-grid"
                    variants={gridVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {skillsCategories.map(category => (
                        <motion.div key={category.id} className="skill-block" variants={itemVariants}>
                            <h3 className="skill-block-title">{category.title}</h3>
                            <ul className="skill-chips">
                                {category.skills.map(skill => (
                                    <li key={skill.name} className="skill-chip">{skill.name}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
