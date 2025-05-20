import { Code, Cpu, Settings } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What can I do for you?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 51, 51, 0.2)" autoAnimate={true}>
            <Code className="h-12 w-12 text-accent-red mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Frontend Development
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting responsive and intuitive user interfaces using modern frameworks and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  VueJS
                </span>
            </div>
          </SpotlightCard>
          
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 51, 51, 0.2)" autoAnimate={true}>
            <Cpu className="h-12 w-12 text-accent-red mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Backend Development
            </h3>
            <p className="text-gray-400 mb-4">
              Building scalable server-side applications and RESTful APIs with modern technologies.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Laravel
                </span>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 51, 51, 0.2)" autoAnimate={true}>
            <Settings className="h-12 w-12 text-accent-red mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              DevOps & Infrastructure
            </h3>
            <p className="text-gray-400 mb-4">
              Implementing CI/CD pipelines, container orchestration, server monitoring.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Docker
                </span>
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Linux
                </span>
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Github Actions
                </span>
            </div>
          </SpotlightCard>
        </div>

        <SpotlightCard className="custom-spotlight-card mt-10" spotlightColor="rgba(255, 51, 51, 0.2)" autoAnimate={true}>
          <p className="text-gray-300 leading-relaxed">
            With over 4 years of experiences in web development and programming, I specialize in building modern applications.
            I'm passionate about creating clean, efficient code and delivering exceptional user experiences.
            When I'm not coding, you can find me contributing to open-source projects or learning new technologies.
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default About;