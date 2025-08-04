import { Figma } from 'lucide-react';
import React, { useState } from 'react'

import reactLogo from '../assets/react.svg'
import cssLogo from '../assets/css.svg'
import githubLogo from '../assets/github.svg'
import htmlLogo from '../assets/html.svg'
import javascriptLogo from '../assets/javascript.svg'
import nodeLogo from '../assets/node.svg'
import pythonLogo from '../assets/python.svg'

import typescriptLogo from '../assets/typescript.png'
import tailwindLogo from '../assets/tailwindcss.png'
import nextjsLogo from '../assets/nextjs-icon.png'
import expressjsLogo from '../assets/express-js.png'
import mongodbLogo from '../assets/mongodb.svg'
import postgresqlLogo from '../assets/Postgresql.png'
import djangoLogo from '../assets/django-icon-svgrepo-com.svg'
import awsLogo from '../assets/AWS-Emblem.svg'
import figmaLogo from '../assets/figma.png'
import vscLogo from '../assets/visual-studio-code.png'
import {cn} from '@/lib/utils.js'


const skills = [
  // Frontend
    { name: "HTML", level: 95, category: "frontend", icon: htmlLogo },
    { name: "CSS", level: 95, category: "frontend", icon:cssLogo },
    { name: "JavaScript", level: 90, category: "frontend", icon: javascriptLogo },
    { name: "React", level: 90, category: "frontend", icon: reactLogo},
    { name: "TypeScript", level: 30, category: "frontend", icon: typescriptLogo },
    { name: "Tailwind CSS", level: 90, category: "frontend", icon: tailwindLogo },
    { name: "Next.js", level: 80, category: "frontend", icon: nextjsLogo},
    { name: "Python", level: 80, category: "frontend", icon: pythonLogo },

  // Backend
    { name: "Node.js", level: 80, category: "backend", icon: nodeLogo },
    { name: "Express.js", level: 75, category: "backend", icon: expressjsLogo },
    { name: "MongoDB", level: 70, category: "backend", icon: mongodbLogo},
    { name: "PostgreSQL", level: 65, category: "backend", icon:  postgresqlLogo },
    { name: "Django", level: 60, category: "backend", icon: djangoLogo },

  // Tools
    { name: "Git/GitHub", level: 90, category: "tools", icon: githubLogo },
    { name: "AWS", level: 70, category: "tools", icon: awsLogo},
    { name: "Figma", level: 85, category: "tools", icon: figmaLogo }, 
    { name: "VS Code", level: 95, category: "tools", icon: vscLogo},
];

const categories = ['all', 'frontend', 'backend', 'tools']

function SkillsSection() {
    const [category, setCategory] = useState('all');

    const filteredSkills = skills.filter((skill) => 
        skill.category === category || category === 'all'
    );


    return (
        <section id="skills" className='py-24 px-4 relative min-h-screen'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>
                    My<span className='text-primary ml-2'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-5 '>
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

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card/70 p-6 rounded-lg shadow-xs card-hover'>
                            <div className='flex justify-center items-center gap-2 mb-4'>
                                <div className='w-10 h-10 object-cover'>
                                    {skill.icon && <img src={skill.icon} alt={skill.name} />}
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-2 mb-4'>
                                <div className=''>
                                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                                </div>
                            </div>

                            {/* <div className='flex justify-center items-center gap-2 mb-4'>

                                <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]'
                                        style={{width: `${skill.level}%`}}>
                                    </div>
                                </div>

                                <div className=''>
                                    <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
