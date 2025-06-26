import AboutMe from "../components/AboutMe"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

            {/* background effects */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection />
            </main>
            {/* Footer */}
        </div>
    )
}

export default Home
