import { ArrowUp } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='py-10 px-8 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center '>
            <p className='text-sm text-muted-foreground'> &copy; {new Date().getFullYear()} Ashley Laisure</p>
            <a href="#hero"><ArrowUp className='hover:text-primary/70 text-primary transition-colors' size={24}/></a>
        </footer>
    )
    }

export default Footer
