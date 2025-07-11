const skills = [
    // --- Frontend Skills ---
    { name: "HTML/CSS", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "JavaScript (ES6)", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "WordPress", level: "Intermediate" },

    // --- Backend Skills ---
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Python", level: "Beginner" },

    // --- Tools / Other ---
    { name: "Cybersecurity Awareness", level: "Basic" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "MS Office", level: "Advanced" },
    { name: "Trello", level: "Intermediate" },
    { name: "Zoom & Google Meet", level: "Advanced" },
    { name: "Digital Marketing", level: "Basic" }
];


export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        skills.map((skill, key) => (

                            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">
                                        {skill.name}
                                    </h3>
                                </div>


                            </div>
                        ))}

                </div>



            </div>
        </section>
    )
}