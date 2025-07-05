import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { ClassN } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    // Check the user's theme preference on initial load
    // and set the initial state accordingly
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);

        }
        else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false)
        }
    })

    // Function to toggle dark mode
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // Save preference to localStorage
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // Save preference to localStorage
            setIsDarkMode(true);
        }
    }


    // Render the toggle button with icons
    return (<button onClick={toggleTheme} className={ClassN("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {""}
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" />
            :
            <Moon className="h6 w-6 text-blue-900" />} </button>)
}