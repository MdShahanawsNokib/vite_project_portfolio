import { useState } from "react";
import { ClassN } from "../lib/utils";

const skills = [
  // --- Front‑end ---
  { name: "HTML/CSS",         level: "90%",  category: "Frontend" },
  { name: "Tailwind CSS",     level: "90%",  category: "Frontend" },
  { name: "Bootstrap",        level: "70%",  category: "Frontend" },
  { name: "JavaScript (ES6)", level: "70%",  category: "Frontend" },
  { name: "React.js",         level: "70%",  category: "Frontend" },
  { name: "WordPress",        level: "70%",  category: "Frontend" },
  { name: "Lucide UI",        level: "50%",  category: "Frontend" },
  { name: "DaisyUI",          level: "60%",  category: "Frontend" },

  // --- Back‑end ---
  { name: "Node.js",          level: "70%",  category: "Backend" },
  { name: "MongoDB",          level: "70%",  category: "Backend" },
  { name: "Python",           level: "40%",  category: "Backend" },

  // --- Tools / Other ---
  { name: "Git & GitHub",     level: "70%",  category: "Tools" },
  { name: "VS Code",          level: "80%",  category: "Tools" },
  { name: "Figma",            level: "60%",  category: "Tools" },
  { name: "Cybersecurity Awareness", level: "20%", category: "Tools" },
  { name: "MS Office",        level: "100%", category: "Tools" },
  { name: "Zoom & Google Meet", level: "100%", category: "Tools" },
  { name: "Digital Marketing", level: "20%", category: "Tools" }
];

// “Tools” (plural) to match the data above
const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // filter only when not “all”
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={ClassN(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <h3 className="font-semibold text-lg mb-4">{skill.name}</h3>

              <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level }}
                />
              </div>

              <span className="text-sm text-muted-foreground">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
