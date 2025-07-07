import React from "react";
import { FcWorkflow } from "react-icons/fc";
import {
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFastapi,
  SiLaravel,
  SiPostgresql,
  SiLinux,
  SiGit,
  SiDocker,
  SiGithubcopilot,
  SiTrello,
} from "react-icons/si";
import { LayoutGrid, Server, Wrench } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: scrollRef, isVisible: scrollVisible } = useScrollAnimation({ threshold: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutGrid className="h-6 w-6 text-accent-red" />,
      skills: [
        { name: "VueJS", icon: <SiVuedotjs className="w-4 h-4 text-[#40B280]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#2F74C0]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4 text-[#36B7F0]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4 text-[#7510F0]" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-accent-red" />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#04988A]" /> },
        { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#F72C1F]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#31648C]" /> },
        { name: "Linux OS", icon: <SiLinux className="w-4 h-4 text-[#F2D42F]" /> },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6 text-accent-red" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-4 h-4 text-[#E84D31]" /> },
        { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#1D63ED]" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Github Copilot", icon: <SiGithubcopilot className="w-4 h-4 text-[#A39EED]" /> },
        { name: "Trello", icon: <SiTrello className="w-4 h-4 text-[#0958DA]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-white mb-12 transform transition-all duration-1000 ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Skills & Technologies
        </h2>

        {/* Horizontal scrolling container */}
        <div 
          ref={scrollRef}
          className={`relative transform transition-all duration-1000 delay-300 ${
            scrollVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          {/* Scroll hint */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">← Scroll horizontally to explore skills →</p>
          </div>
          
          <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-dark-700 p-6 rounded-lg min-w-[320px] flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-dark-600 text-gray-300 rounded-lg hover:bg-dark-800 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
