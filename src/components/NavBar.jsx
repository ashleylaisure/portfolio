import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
    {name : "Home", href: "#hero"},
    {name : "About", href: "#about"},
    {name : "Skills", href: "#skills"},
    {name : "Projects", href: "#projects"},
    {name : "Contact", href: "#contact"},
]
function NavBar() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() => {
        const navScroll = () => {
            setIsScrolled(window.scrollY >= 8)
        }

        window.addEventListener('scroll', navScroll)
        return () => window.removeEventListener('scroll', navScroll)

    })


    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300 py-5",
                isScrolled ? "bg-card shadow-xs" : "bg-background/90 shadow-xs"
                )}>
            <div className="container flex items-center justify-between">
                <div className='flex justify-center items-center'>
                    <a 
                        className="text-xl font-bold text-primary flex items-center"
                        href="#hero">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Ashley </span> Portfolio
                        </span>
                    </a>

                    {/* theme toggle */}
                    <ThemeToggle />

                </div>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}

                <button onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
                <div 
                    className={cn(
                        "fixed inset-0 bg-card/60 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default NavBar