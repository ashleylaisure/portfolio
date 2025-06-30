import AboutMe from "../components/AboutMe"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"
import {Toaster} from 'react-hot-toast'

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <Toaster position="bottom-right"/>
            {/* background effects */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
