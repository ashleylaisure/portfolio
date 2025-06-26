import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Mindsweeper",
        description: "JavaScript game",
        image: '/projects/project1.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 2,
        title: "The BookNook",
        description: "JavaScript game",
        image: '/projects/project2.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
    {
        id: 3,
        title: "Backpacking Blueprint",
        description: "JavaScript game",
        image: '/projects/project3.png',
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: 'https://github.com/ashleylaisure/Minesweeper',
        demoUrl: 'https://ashleylaisure.github.io/Minesweeper/',
    },
]
function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((projects, key) => (

                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className="h-48 overflow-hidden">
                                <img src={projects.image} alt={projects.title} className='w-full h-full object-cover object-top-left transition-transform duration-500 group-hover:scale-110'/>
                            </div>

                            <div className='p-4'>
                                <h3 className='text-xl font-semibold mb-1'>{projects.title}</h3>

                                <p className='text-muted-forground text-sm mb-4'>{projects.description}</p>

                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2'>
                                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                            href={projects.demoUrl}
                                            target='_blank'><ExternalLink size={20}/>
                                        </a>
                                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href={projects.githubUrl} target='_blank'><Github size={20}/></a>
                                    </div>

                                    <div className='flex flex-wrap gap-1'>
                                        {projects.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-forground">{tag}</span>
                                        ))}
                                    </div>
                                </div>



                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/ashleylaisure"
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                        target='_blank'>
                        Check Out My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
