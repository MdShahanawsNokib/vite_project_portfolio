import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="Hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div>
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground/90 dark:text-foreground/90 tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi!, I'm </span>
                        <span className="text-primary animate-fade-in-delay-1 opacity-0">
                            Md. {" "}
                        </span>
                        <span className="text-primary ml-2 animate-fade-in-delay-2 opacity-0">
                            Shahanaws {" "}
                        </span>
                        <span className="text-primary ml-2 animate-fade-in-delay-3 opacity-0">
                            Nokib.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xs text-muted-foreground max-w-2xl mx-auto animate-typing-multiline">
                        Computer Science graduate skilled in React.js, Tailwind CSS, and WordPress. Currently working at Bit Code Technologies Ltd. with a focus on web development and tech support.
                        <span className="animate-typing blinking-cursor">.....</span>
                    </p>

                    {/* View My Work */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Vew My Work
                        </a>
                    </div>
                </div>
            </div>




            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </div>
    </section>
}