import React from 'react';
import { Code, Cpu, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Wghat can I do for you?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark-700 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
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
          </div>
          
          <div className="bg-dark-700 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
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
          </div>
          
          <div className="bg-dark-700 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <Settings className="h-12 w-12 text-accent-red mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              DevOps & Infrastructure
            </h3>
            <p className="text-gray-400 mb-4">
              Implementing CI/CD pipelines, container orchestration, and cloud infrastructure automation.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Docker
                </span>
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Gitlab
                </span>
                <span className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                  Github Actions
                </span>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-dark-700 p-8 rounded-lg">
          <p className="text-gray-300 leading-relaxed">
            With over 4 years of experience in web development and programming, I specialize in building modern applications.
            I'm passionate about creating clean, efficient code and delivering exceptional user experiences.
            When I'm not coding, you can find me contributing to open-source projects or learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;