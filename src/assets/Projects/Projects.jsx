import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "URL Shortener",
    description: "Full-stack URL shortener application where users can sign up, shorten long URLs into custom codes, and manage their shortened links. Built for a complete end-to-end solution.",
    tech: ["React", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS","REST API"],
    github: "https://github.com/kUnal929/URL-Shortener",
    liveUrl: "#", // placeholder
  },
  {
    title: "Books Store",
    description: "Built a backend project for managing books and authors. Implemented CRUD features, input validation, error handling, and clear API documentation for local development and testing.",
    tech: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM","REST API"],
    github: "https://github.com/kUnal929/book-store",
    liveUrl: "#",
  },
  {
    title: "Basecamp Backend",
    description: "A RESTful API service designed to support collaborative project management. The system enables teams to organize projects, manage tasks with subtasks, maintain project notes, and handle user authentication with role-based access control.",
    tech: ["Node.js", "Express","MongoDB", "REST API"],
    github: "https://github.com/kUnal929/Basecamp-Project-Management",
    liveUrl: "#",
  },
  {
    title: "Job Portal Frontend",
    description: "Created a frontend Job Portal featuring job listings, user-friendly navigation, and a responsive design for better user experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kUnal929/job_PORTAL",
    liveUrl: "#",
  }
];

// Reusable gradients that will loop automatically
const projectGradients = [
  "from-blue-600 to-indigo-900",
  "from-emerald-600 to-teal-900",
  "from-purple-600 to-fuchsia-900",
  "from-orange-600 to-red-900",
  "from-cyan-500 to-blue-700",
  "from-rose-500 to-red-800",
  "from-amber-500 to-orange-700",
  "from-green-500 to-emerald-800"
];

const Projects = () => {
  return (
    <section id="Projects" className="observe-section max-w-7xl mx-auto px-6 py-16 border-t border-slate-800/50">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
      </div>

      <div className="flex flex-col gap-16">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const assignedGradient = projectGradients[index % projectGradients.length];

          return (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row bg-slate-800/20 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-500 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1"
            >
              {/* Image / Placeholder Side */}
              <div className={`w-full md:w-1/2 min-h-[250px] md:min-h-full flex items-center justify-center bg-gradient-to-br ${assignedGradient} p-8 ${!isEven ? 'md:order-2' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-white opacity-80 uppercase tracking-widest text-center">
                  {project.title}
                </h3>
              </div>

              {/* Content Side */}
              <div className={`w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 text-sm font-medium text-[#38BDF8] bg-slate-800 border border-[#38BDF8]/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-lg font-medium"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={24} />
                    <span>View Source</span>
                  </a>
                  {/* Uncomment if live URLs are provided in the future */}
                  {/* <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#38BDF8] hover:text-[#7DD3FC] transition-colors text-lg font-medium"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
