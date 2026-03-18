import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDatabase, FaServer } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiExpress, SiPostgresql, SiWix, SiMongodb, SiTailwindcss, SiGit } from "react-icons/si";

const skillsList = [
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] group-hover:scale-110 transition-transform" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] group-hover:scale-110 transition-transform" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933] group-hover:scale-110 transition-transform" /> },
  { name: "Express.js", icon: <SiExpress className="text-white group-hover:scale-110 transition-transform" /> },
  { name: "NestJS", icon: <SiNestjs className="text-[#E0234E] group-hover:scale-110 transition-transform" /> },
  { name: "SQL", icon: <FaDatabase className="text-[#00758F] group-hover:scale-110 transition-transform" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] group-hover:scale-110 transition-transform" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] group-hover:scale-110 transition-transform" /> },
  { name: "REST API", icon: <FaServer className="text-slate-300 group-hover:scale-110 transition-transform" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB] group-hover:scale-110 transition-transform" /> },
  { name: "Wix Studio", icon: <SiWix className="text-white group-hover:scale-110 transition-transform" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26] group-hover:scale-110 transition-transform" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6] group-hover:scale-110 transition-transform" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] group-hover:scale-110 transition-transform" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032] group-hover:scale-110 transition-transform" /> },
  { name: "GitHub", icon: <FaGithub className="text-white group-hover:scale-110 transition-transform" /> }
];

const Skills = () => {
  return (
    <section id="Skills" className="observe-section max-w-7xl mx-auto px-6 py-16 border-t border-slate-800/50">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Technical Skills</h2>
      </div>

      <div className="bg-slate-800/20 border border-slate-700/50 rounded-3xl p-10 md:p-16 lg:p-20 hover:border-slate-600 transition-colors shadow-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-12">
          {skillsList.map((skill, idx) => (
            <div key={idx} className="group flex flex-col items-center gap-4">
              <div className="text-5xl md:text-6xl text-slate-400 flex items-center justify-center p-5 outline outline-1 outline-slate-700/50 rounded-2xl bg-[#1a1a1a] shadow-md group-hover:bg-[#222222] transition-colors">
                {skill.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-slate-400 group-hover:text-slate-200 transition-colors text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
