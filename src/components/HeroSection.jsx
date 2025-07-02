import { ArrowDown } from 'lucide-react'
import React, { Suspense } from 'react'
// import { motion } from 'framer-motion'
import Hero3d from './Hero3d'
import { Canvas } from '@react-three/fiber'

function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-start px-4">
            <div className='container max-w-4xl mx-auto text-center z-10 mt-60'>
                <div className='space-y-6'>

                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='text-primary ml-2 opacity-0 animate-fade-in-delay-1'>Ashley</span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>Laisure</span>
                    </h1>

                    <p className='text:lg md:text-xl text-muted-forground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4'>
                        Full stack developer specialized in building interfaces that are both beautiful and functional. 
                    </p>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href="#projects" className='cosmic-button'>View My Work</a>

                    </div>
                </div>
            </div>

            {/* hero image */}
            <div className='absolute bottom-0 right-0 md:right-30 w-[400px] h-[400px]'>
                
                <Suspense fallback="loading...">
                    <div className="absolute -bottom-30 -right-20 z-0">
                        <Hero3d />
                    </div>
                    
                </Suspense>

                <div className="absolute -bottom-10 right-0 z-10">
                    <img 
                        className="w-full h-auto"
                        src="src/assets/Laisure_Ashley_8958_ret_FP-fix-Picsart-BackgroundRemover.jpg" alt="Ashley Laisure headshot"/>
                </div>

            </div>

            <div className='absolute -bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-primary-foreground mb-2'>Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}

export default HeroSection