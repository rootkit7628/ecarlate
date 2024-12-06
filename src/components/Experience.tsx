import React from 'react';
import { Building2, Users, Trophy, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = {
    work: [
      {
        company: 'Tech Solutions Inc.',
        role: 'Senior Full Stack Developer',
        period: '2021 - Present',
        description: 'Leading development of enterprise web applications and mentoring junior developers.',
        tech: ['React', 'Node.js', 'AWS']
      },
      {
        company: 'Digital Innovations Ltd',
        role: 'Frontend Developer',
        period: '2019 - 2021',
        description: 'Developed responsive web applications and improved site performance by 40%.',
        tech: ['Vue.js', 'TypeScript', 'GraphQL']
      }
    ],
    community: [
      {
        name: 'Tech Mentors Network',
        role: 'Lead Mentor',
        period: '2020 - Present',
        description: 'Mentoring aspiring developers and organizing coding workshops.'
      },
      {
        name: 'Open Source Contributors',
        role: 'Core Contributor',
        period: '2019 - Present',
        description: 'Contributing to various open-source projects and reviewing pull requests.'
      }
    ],
    clubs: [
      {
        name: 'Local JavaScript Club',
        role: 'Organizer',
        period: '2021 - Present',
        description: 'Organizing monthly meetups and technical workshops.'
      },
      {
        name: 'Web Dev Society',
        role: 'Technical Speaker',
        period: '2020 - Present',
        description: 'Regular speaker on modern web development topics.'
      }
    ]
  };

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Experience & Community
        </h2>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-accent-red" />
            <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.work.map((job, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-lg hover:bg-dark-700 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">{job.company}</h4>
                  <span className="text-accent-red flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {job.period}
                  </span>
                </div>
                <p className="text-lg text-accent-red mb-2">{job.role}</p>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-dark-600 text-sm text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Involvement */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-accent-red" />
            <h3 className="text-2xl font-semibold text-white">Community Involvement</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.community.map((community, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-lg hover:bg-dark-700 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">{community.name}</h4>
                  <span className="text-accent-red flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {community.period}
                  </span>
                </div>
                <p className="text-lg text-accent-red mb-2">{community.role}</p>
                <p className="text-gray-400">{community.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-8 w-8 text-accent-red" />
            <h3 className="text-2xl font-semibold text-white">Clubs & Organizations</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.clubs.map((club, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-lg hover:bg-dark-700 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">{club.name}</h4>
                  <span className="text-accent-red flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {club.period}
                  </span>
                </div>
                <p className="text-lg text-accent-red mb-2">{club.role}</p>
                <p className="text-gray-400">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;