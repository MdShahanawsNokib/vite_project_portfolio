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

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-typing-multiline">
                        A Computer Science graduate and have practical skills in web development, tech support and office coordination. I can create fully responsive websites with the help of React.js, Tailwind CSS, WordPress, with a burgeoning interest in cybersecurity.
                        I am currently employed at Bit Code Technologies Ltd., where I am in charge of website maintenance as well as other development related duties. I excel at problem-solving, learning new techniques, and working on meaningful projects.
                        <span className="animate-typing blinking-cursor">.....</span>
                    </p>


                </div>
            </div>

        </div>
    </section>
}