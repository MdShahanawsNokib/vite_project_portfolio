import { AboutSection } from "../Components/AboutSection";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/NavBar";
import { SkillsSection } from "../Components/SkillsSection";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">  {/* theme toggole js and classed */}
        <ThemeToggle /> {/* ThemeToggle component */}

        {/* Bankground Effacts */}
        <StarBackground /> {/* StarBackground component */}

        {/* Navigation bar */}
        <Navbar />

        {/* Main Content */}

        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>



    </div>;
}