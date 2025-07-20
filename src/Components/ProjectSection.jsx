import { ExternalLink, Github, MoveLeft, MoveRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Admin Dashboard",
    description: "A beautiful Deshboard.",
    image: "/picture/image.png",
    tags: ["React", "TailwindCSS", "NodeJs"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "A full-featured online store built with Next.js and Stripe for payments.",
    image: "/picture/image2.jpg",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support and user authentication.",
    image: "/picture/image3.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  }
];






export const ProjecSction = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing a collection of my favorite projects, built with passion and cutting-edge technologies. Explore my hands-on work that blends creativity, code, and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto ">

          {projects.map((project, key) => (
            <div key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full trnsition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="mx-auto px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-sm border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="mx-auto flex">
                  <a
                    href={project.demoUrl}
                    className="text-primary hover:underline p-3 flex gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-primary p-3 hover:underline flex gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="m-12 text-center">
        <a
          target="_blank"
          href="https://github.com/MdShahanawsNokib"
          className="cosmic-button w-fit flex mx-auto gap-2 "
        >My Github Profile <MoveRight /> </a>
      </div>
    </section>
  );
};