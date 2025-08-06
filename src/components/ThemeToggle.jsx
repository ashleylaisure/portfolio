import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "../ThemeContext"


const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme} 
            className={cn("p-2 rounded-full transition-colors duration-300 cursor-pointer",
                // "relative max-sm:hidden top-5 right-5 z-50",
                "focus:outline-hidden"
            )}>
            {theme === 'dark' ? <Moon className="h-6 w-6 text-blue-900"/> : <Sun className="h-6 w-6 text-yellow-300"/>}
        </button>
    )
}

export default ThemeToggle
