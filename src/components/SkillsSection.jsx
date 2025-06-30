import { Figma } from 'lucide-react';
import React, { useState } from 'react'
import reacti from '../assets/react.svg'
import css from '../assets/css.svg'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import javascript from '../assets/javascript.svg'
import node from '../assets/node.svg'
import python from '../assets/python.svg'
import {cn} from '@/lib/utils.js'


const skills = [
  // Frontend
    { name: "HTML", level: 95, category: "frontend", icon: html },
    { name: "CSS", level: 95, category: "frontend", icon:css },
    { name: "JavaScript", level: 90, category: "frontend", icon: javascript },
    { name: "React", level: 90, category: "frontend", icon: reacti},
    { name: "TypeScript", level: 30, category: "frontend", icon:'' },
    { name: "Tailwind CSS", level: 90, category: "frontend", icon:'' },
    { name: "Next.js", level: 80, category: "frontend", icon: ''},
    { name: "Python", level: 80, category: "frontend", icon: python },

  // Backend
    { name: "Node.js", level: 80, category: "backend", icon: node },
    { name: "Express", level: 75, category: "backend", icon: '' },
    { name: "MongoDB", level: 70, category: "backend", icon: ''},
    { name: "PostgreSQL", level: 65, category: "backend", icon: '' },
    { name: "Django", level: 60, category: "backend", icon: '' },

  // Tools
    { name: "Git/GitHub", level: 90, category: "tools", icon: github },
    { name: "AWS", level: 70, category: "tools", icon: ''},
    { name: "Figma", level: 85, category: "tools", icon: '' }, 
    { name: "VS Code", level: 95, category: "tools", icon: ''},
];

const categories = ['frontend', 'backend', 'tools']

function SkillsSection() {
    const [category, setCategory] = useState('frontend');

    const filteredSkills = skills.filter((skill) => 
        skill.category === category
    );


    return (
        <section id="skills" className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My<span className='text-primary ml-2'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12 '>
                    {categories.map((cat, key) => (
                        <button 
                        key={key}
                        onClick={() => setCategory(cat)} 
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer font-semibold ',
                                category === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:text-primary'
                            )}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card/70 p-6 rounded-lg shadow-xs card-hover'>
                            <div className='flex justify-center items-center gap-2 mb-4'>
                                <div className=''>
                                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                                </div>

                                <div className='w-6 h-6 rounded-full object-cover'>
                                    {skill.icon ? <img src={skill.icon} alt={skill.name} /> : null}
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-2 mb-4'>

                                <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]'
                                        style={{width: `${skill.level}%`}}>
                                    </div>
                                </div>

                                <div className=''>
                                    <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
