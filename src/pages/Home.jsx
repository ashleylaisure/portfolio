import NavBar from "../components/NavBar"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* theme toggle */}
            <ThemeToggle />
            {/* background effects */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main Content */}
            {/* Footer */}
        </div>
    )
}

export default Home
