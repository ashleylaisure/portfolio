import { ArrowRight, ArrowLeft, ExternalLink, Github, CircleDot, Circle } from 'lucide-react'
import React from 'react'
import { useState } from 'react'


const projects = [
    {
        id: 0,
        title: "Mindsweeper",
        description: "JavaScript game",
        image: '/projects/project1.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 1,
        title: "The BookNook",
        description: "MEN Stack",
        image: '/projects/project2.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 2,
        title: "Corner Market",
        description: "MERN Stack",
        image: '/projects/project2.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 3,
        title: "Weather App",
        description: "React application",
        image: '/projects/project3.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 4,
        title: "Bacpacking Blueprint",
        description: "Django/python",
        image: '/projects/project3.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
]

function ProjectsSection() {

    const [project, setProject] = useState(projects[0])

    const showPreviousProject = () => {
        if (project.id === 0 ) {
            setProject(projects[projects.length - 1])
        } else {
            setProject(projects[project.id - 1])
        }
    }

    const showNextProject = () => {
        if (project.id === projects.length - 1) {
            setProject(projects[0])
        } else {
            setProject(projects[project.id + 1])
        }
    }

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-10 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                        <div className="flex items-center justify-center w-full">

                            <div className='group bg-card rounded-lg overflow-hidden shadow-xs min-w-[400px] max-w-[500px]  '>

                                <div className='p-4 min-h-[150px] flex flex-col justify-between'>
                                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                                    <p className='text-muted-forground text-sm'>{project.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-2'>
                                            <a className="text-foreground hover:text-primary transition-colors duration-300" 
                                                href={project.demoUrl}
                                                target='_blank'><ExternalLink size={20}/>
                                            </a>
                                            <a className="text-foreground hover:text-primary transition-colors duration-300" 
                                                href={project.githubUrl} 
                                                target='_blank'><Github size={20}/>
                                            </a>
                                        </div>
                                        <div className='flex flex-wrap gap-1'>
                                            {project.tags.map((tag) => (
                                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/40">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className="w-full h-full flex justify-center overflow-hidden">
                            <img className='h-[350px] object-cover object-top rounded-lg'
                                src={project.image} alt={project.title} />
                        </div>
                </div> 

                <div className='mx-auto flex flex-col justify-center'> 
                    <div className="w-full flex justify-between my-4">
                        <button 
                            className='cosmic-button  flex items-center gap-2 cursor-pointer'
                            onClick={showPreviousProject}>
                                <ArrowLeft size={16}/>
                        </button>

                        <div className='flex items-center gap-1'>
                            {projects.map((_, index) => (
                                <button key={index}
                                    className="text-primary hover:text-primary/50 transition-colors duration-300 cursor-pointer"
                                    onClick={() => setProject(projects[index])}
                                    >
                                    {index === project.id ? 
                                        <CircleDot size={25}/> : <Circle size={25}/> }
                                </button>
                            ))}
                        </div>

                        <button 
                            className='cosmic-button  flex items-center gap-2 cursor-pointer'
                            onClick={showNextProject}
                            >
                                <ArrowRight size={16}/>
                        </button>
                    </div>

                    <div className="text-center">
                        <a href="https://github.com/ashleylaisure"
                            className='cosmic-button w-fit flex items-center mx-auto gap-2'
                            target='_blank'>
                            Check Out My Github <ArrowRight size={16}/>
                        </a>
                    </div>
                
                </div>

            
            </div>
        </section>
    )
}

export default ProjectsSection
