import React from 'react';
import { 
  LayoutGrid, 
  Server, 
  Wrench,
  Database,
  Globe,
  Cpu,
  Git,
  Cloud,
  TestTube,
  Workflow
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <LayoutGrid className="h-6 w-6 text-accent-red" />,
      skills: [
        { name: 'VueJS', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind', icon: '🎨' },
        { name: 'Bootstrap', icon: '▲' }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="h-6 w-6 text-accent-red" />,
      skills: [
        { name: 'FastAPI', icon: '🟢' },
        { name: 'Laravel', icon: '🚂' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'GraphQL', icon: '◈' },
        { name: 'Linux SysAdmin', icon: '🐧' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="h-6 w-6 text-accent-red" />,
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'Docker', icon: '🐳' },
        { name: 'CI/CD', icon: '🔄' },
        { name: 'Github Copilot', icon: '🔄' },
        { name: 'Trello', icon: '🔧' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-700 p-6 rounded-lg">
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
                    className="px-4 py-2 bg-dark-600 text-gray-300 rounded-lg hover:bg-accent-red hover:text-white transition-colors duration-300 flex items-center gap-2"
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