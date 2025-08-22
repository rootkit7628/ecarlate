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

const Skills = () => {
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
    <section id="skills" className="py-20 bg-light-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg dark:shadow-none transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-light-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-light-300 dark:hover:bg-dark-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-2"
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
    </section>
  );
};

export default Skills;
