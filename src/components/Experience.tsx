import { Building2, Users, Trophy, Calendar } from 'lucide-react';
import Timeline from './Timeline';

const Experience = () => {
  const experiences = {
    work: [
      {
        company: 'AM WEB Solutions',
        role: 'FullStack Middle Developer',
        period: '2023 - Present',
        description: 'Leading development of web and mobile apps projects and improving existing features.',
        tech: ['FastAPI', 'Laravel', 'VueJS', 'React', 'Mysql']
      },
      {
        company: 'Konecta Digital (Comdata)',
        role: 'Backend Developer & Exploit Support',
        period: '2022 - 2023',
        description: 'Developping and enhancing tools used by call centers and providing technical support to client arround the world.',
        tech: ['Vue.js', 'TypeScript', 'GraphQL']
      }
    ],
    community: [
      {
        name: 'iTeam-s Community',
        role: 'Head & Member',
        period: '2020-2023',
        description: 'Young community of developers and designers, where we share knowledge and help each other. Developing projects, organizing events and workshops.',
      },
      {
        name: 'GDG Antananarivo & GDSC ESTI',
        role: 'Core Member',
        period: '2022-2023',
        description: 'Google Developer Group and Google Developer Student Club, where we organize events and workshops to bring together local developers and students.'
      }
    ],
    clubs: [
      {
        name: 'Makoto Japanese Club',
        role: 'Student Member',
        period: '2024 - Present',
        description: 'Learning and sharing Japanese language and culture.'
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
          <Timeline items={experiences.work} />
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