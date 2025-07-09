import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-4 px-4 relative">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    About <span className="text-primary">Me</span>
                </h2>
                {/* Add your about content here */}
                {/* section 1 right */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer
                            <hr />
                        </h3>

                        <p className="text-muted-foreground">I’m Md Shahanaws Nokib, a Computer Science graduate with practical skills in web development, tech support, and administrative coordination. I specialize in creating responsive websites using React.js,
                            Tailwind CSS, and WordPress, and I have a growing interest in cybersecurity.

                        </p>
                        <p className="text-muted-foreground">
                            Currently, I work at Bit Code Technologies Ltd., where I handle website maintenance and assist in development tasks. Previously, I coordinated visa processing at a Japanese language center, improving my communication and multitasking skills.
                            I enjoy solving problems, learning new technologies, and contributing to impactful, team-driven projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primay hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>



                    {/* section -- 2 */}

                    <div className="gird grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover mb-4">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-mute-foreground text-xs">Crafting sleek, responsive, and modern web experiences that blend clean design with powerful functionality.</p>
                                </div>

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover mb-4">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">IT Support & Technical Assistance</h4>
                                    <p className="text-mute-foreground text-xs">Providing reliable IT support and troubleshooting to ensure smooth technical operations and user satisfaction.</p>
                                </div>

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Documentation & Compliance</h4>
                                    <p className="text-mute-foreground text-xs">Experienced in preparing accurate documentation and ensuring compliance with regulatory standards across technical and administrative processes.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
