import { ArrowRight, ArrowLeft, ExternalLink, Github, CircleDot, Circle } from 'lucide-react'
import React from 'react'
import { useState } from 'react'


const projects = [
    {
        id: 0,
        title: "Mindsweeper",
        description: "A classic logic game, reimagined as a browser-based JavaScript experience",
        image: '/projects/portfolio_minesweeper.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 1,
        title: "The BookNook",
        description: "Full-stack development project, allowing users to log and manage their book collection.",
        image: '/projects/project2.png',
        tags: ["Node.js", "Express", "MongoDB"],
        githubUrl: 'https://github.com/ashleylaisure/_thebooknook',
        demoUrl: 'https://thebooknook-d5125933b6c8.herokuapp.com/',
    },
    {
        id: 2,
        title: "The BookNook",
        description: "Full-stack development project, allowing users to log and manage their book collection.",
        image: '/projects/project2_pic2.png',
        tags: ["Node.js", "Express", "MongoDB"],
        githubUrl: 'https://github.com/ashleylaisure/_thebooknook',
        demoUrl: 'https://thebooknook-d5125933b6c8.herokuapp.com/',
    },
    {
        id: 3,
        title: "Corner Market",
        description: "A community-driven platform where users can sign up, create personalized profiles, and create listings. ",
        image: '/projects/cornermarket.png',
        tags: ["MongoDB", "Express", "React", "Node.js"],
        githubUrl: 'https://github.com/ashleylaisure/corner-market-front-end',
        demoUrl: '',
    },
    {
        id: 4,
        title: "Corner Market",
        description: "A community-driven platform where users can sign up, create personalized profiles, and create listings. ",
        image: '/projects/cornermarket_2.png',
        tags: ["MongoDB", "Express", "React", "Node.js"],
        githubUrl: 'https://github.com/ashleylaisure/corner-market-back-end',
        demoUrl: '',
    },
    {
        id: 5,
        title: "Backpacking Blueprint",
        description: "Comprehensive app designed to help thru-hikers plan their next adventure. With the ability to plan out a daily itinerary for each trip, including meal planning and gear to pack.",
        image: '/projects/project3.png',
        tags: ["Python", "Django", "PostgreSQL"],
        githubUrl: 'https://github.com/ashleylaisure/backpacking_blueprint',
        demoUrl: 'https://backpacking-blueprint.onrender.com/',
    },
    {
        id: 6,
        title: "Backpacking Blueprint",
        description: "Comprehensive app designed to help thru-hikers plan their next adventure. With the ability to plan out a daily itinerary for each trip, including meal planning and gear to pack.",
        image: '/projects/project3_pic2.png',
        tags: ["Python", "Django", "PostgreSQL"],
        githubUrl: 'https://github.com/ashleylaisure/backpacking_blueprint',
        demoUrl: 'https://backpacking-blueprint.onrender.com/',
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

                <div className='bg-card/70 p-6 rounded-lg shadow-xs'>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-3 '>

                        <div className="col-span-4 flex items-center justify-center w-full h-full pt-5">

                            <div className='flex flex-col w-full h-full justify-between'>
                                
                                <div className='p-5 flex flex-col gap-6'>
                                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                                    <p className='text-muted-forground text-sm'>{project.description}</p>
                                </div>
                                

                                <div className='flex flex-col items-center gap-2 pt-3 border-t border-muted-foreground/20'>
                                    <div className='flex gap-2'>
                                        {project.demoUrl && (<a className="text-foreground hover:text-primary transition-colors duration-300" 
                                            href={project.demoUrl}
                                            target='_blank'><ExternalLink size={20}/>
                                        </a>)}
                                        
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
                            
                        <div className="col-span-8 w-full h-full flex justify-center overflow-hidden">
                            <img className='h-[300px] object-cover object-center rounded-lg'
                                src={project.image} alt={project.title} />
                        </div>
                    </div> 

                    <div className='mx-auto flex flex-col justify-center'> 
                        <div className="w-full flex justify-between mt-5">
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

                        {/* <div className="text-center">
                            <a href="https://github.com/ashleylaisure"
                                className='cosmic-button w-fit flex items-center mx-auto gap-2'
                                target='_blank'>
                                Check Out My Github <ArrowRight size={16}/>
                            </a>
                        </div> */}
                    
                    </div>
                </div>

            
            </div>
        </section>
    )
}

export default ProjectsSection
