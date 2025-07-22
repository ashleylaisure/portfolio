import { Briefcase, Code, PenTool, User } from 'lucide-react'
import React from 'react'

function AboutMe() {
    return (
        <section id="about" className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>
                    About 
                    <span className='text-primary ml-2'>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
                        
                        <p className='text-muted-foreground'>
                            Recent Graduate of General Assembly's Software Engineering Program. 
                        </p>
                        
                        <p className='text-muted-foreground'>
                            Full-stack software engineer with 10+ years of customer service experience and a background in visual arts. 
                            I bring a unique blend of user empathy, strong communication, and design sensibility to building user-centered applications. 
                        </p>
                        <p className='text-muted-foreground'>
                            Proficient in the MERN stack and experienced with RESTful APIs, scalable backends, and responsive front-end design. 
                            I create intuitive, efficient tools that streamline workflows and support product 
                            growth—driven by a passion for building well-designed software that simplifies everyday life.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>

                            <a href="#contact" className='cosmic-button'>Get In Touch</a>
                            <a href="" className='cosmic-button-2'>Download Resume</a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='bg-card/70 gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>Creating responsive websites and web applicatons with modern frameworks.</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-card/70 gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <PenTool className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                    <p className='text-muted-foreground'>Designing intutive user interfaces and seamless user experiences.</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-card/70 gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Project Management</h4>
                                    <p className='text-muted-foreground'>Leading projects from conception to completion with agile methodologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
