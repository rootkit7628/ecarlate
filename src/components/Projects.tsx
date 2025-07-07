import { ExternalLink, Github } from 'lucide-react';
import aetravel from '../assets/img/projects/img_aetravel.webp';
import ampalibe from '../assets/img/projects/img_ampalibe.webp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: 'AE Travel Madagascar',
      description: 'A travel agency static website to promote tourism in Madagascar.',
      image: aetravel,
      tech: ['HTML', 'Boostrap'],
      github: 'https://github.com/gaetan1903/Agence',
      live: 'https://www.ae-travel-mada.com'
    },
    {
      title: 'Ampalibe Framework',
      description: 'A Python framework for building facebook messenger chatbots efficiently.',
      image: ampalibe,
      tech: ['FastAPI', 'Meta Messenger API', 'MySQL', 'Shell'],
      github: 'https://github.com/iTeam-S/Ampalibe',
      live: 'https://ampalibe.readthedocs.io'
    },
    {
      title: 'WebSearch',
      description: 'Python module allowing you to do various searches for links on the Web.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
      tech: ['Flask', 'BeautifulSoup', 'Scrapping'],
      github: 'https://github.com/iTeam-S/WebSearch',
      live: 'https://github.com/iTeam-S/WebSearch'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-white mb-12 transform transition-all duration-1000 ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Featured Projects
        </h2>
        
        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-dark-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ${
                projectsVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: projectsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-accent-red transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-accent-red transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;