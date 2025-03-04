import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown, FileDown, Briefcase, Code2, Award } from 'lucide-react';
import profile from '../assets/img/profile_illustration.webp';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-dark-900">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-accent-redDark opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex flex-col md:flex-row mt-4">
            <div>
              <div className="mb-8 relative inline-block">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent-red shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={ profile }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-red to-transparent opacity-20 animate-pulse"></div>
              </div>
            </div>
            <div className="text-left pl-20">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-white to-accent-red bg-clip-text text-transparent">
                  Arleme JOHNSON
                </span>
              </h1>
              <p className="text-2xl sm:text-4xl font-semibold text-gray-300 mb-8">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                Building beautiful, responsive, and user-friendly web apps or software
                with modern technologies.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/rootkit7629" className="text-gray-400 hover:text-accent-red transition-colors">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com/in/arleme-jhn" className="text-gray-400 hover:text-accent-red transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:arleme.dev7@gmail.com" className="text-gray-400 hover:text-accent-red transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
            
            <Link
              to="/resume"
              className="inline-flex items-center px-6 py-3 bg-accent-red hover:bg-accent-redDark text-white font-medium rounded-lg transition-colors duration-300"
            >
              <FileDown className="h-5 w-5 mr-2" />
              View Resume
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg">
              <Briefcase className="h-8 w-8 text-accent-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg">
              <Code2 className="h-8 w-8 text-accent-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg">
              <Award className="h-8 w-8 text-accent-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-gray-400">Awards Winned</div>
            </div>
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg">
              <Github className="h-8 w-8 text-accent-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">40+</div>
              <div className="text-gray-400">Github Repos</div>
            </div>
          </div>

          <a
            href="#about"
            className="inline-block animate-bounce text-gray-400 hover:text-accent-red transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;