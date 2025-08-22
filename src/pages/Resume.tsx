import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowLeft, PhoneIcon } from 'lucide-react';
import { FR, MG, JP, US } from 'country-flag-icons/react/3x2';
import resume from '../assets/pdf/arleme-johnson-resume.pdf';

const Resume = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-red transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Portfolio
        </Link>
        
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl dark:shadow-none p-8 transition-colors duration-300">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-light-300 dark:border-dark-600 pb-6 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Arleme Johnson</h1>
              <h2 className="text-xl text-accent-red mb-4">Full Stack Developer</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>arleme.dev7@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+261 38 66 550 99</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Antananarivo 101, M/Car</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={ resume}
                download
                className="flex items-center gap-2 px-4 py-2 bg-accent-red hover:bg-accent-redDark text-white rounded-lg transition-colors"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Experienced Full Stack Developer with 4+ years of expertise in building scalable web applications.
              Specialized in Python/VueJS. Passionate about creating efficient,
              maintainable code and delivering exceptional user experiences.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Work Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-accent-red pl-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">FullStack Middle Developer</h4>
                <div className="text-accent-red mb-2">AM WEB Solutions. • 2023 - Present</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Developing web apps or integrate API using VueJS/React - FastAPI/Laravel</li>
                  <li>Configuring linux servers [WebServer, Package, Container, VPS, CPanel, ...]</li>
                  <li>CI [Unites/Integration Tests, Code Quality & Complexity] & CD [Build Pipeline]</li>
                </ul>
              </div>
              <div className="border-l-2 border-accent-red pl-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Exploit Developer & SysAdmin</h4>
                <div className="text-accent-red mb-2">Konnecta Digital (Comdata) • 2022 - 2023</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Maintain & Develop tools for our call centers</li>
                  <li>Optimize Process and Database Performance</li>
                  <li>Taking care of issues tickets and improvements requests</li>
                  <li>Monitoring Production Server</li>
                </ul>
              </div>
              <div className="border-l-2 border-accent-red pl-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">HEAD & Member / Developer</h4>
                <div className="text-accent-red mb-2">iTeam-s Community • 2022 - 2023</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Creating and managing a community of young to develop IT and soft skills</li> 
                  <li>Participing in Hackathon Awards and IT Events</li>
                  <li>Contribute into Open Source Projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="text-accent-red mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'VueJs', 'TypeScript', 'Tailwind', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-light-200 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-accent-red mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'MySQL', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-light-200 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-accent-red mb-2">Devops</h4>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Github Actions', 'Gitlab'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-light-200 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section  className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
            <div className="border-l-2 border-accent-red pl-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
              <div className="text-accent-red">ESTI University • 2021 - 2023</div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
              </p>
            </div>
            <div className="border-l-2 border-accent-red pl-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">Preparatory Year</h4>
              <div className="text-accent-red">Program Sesame • 2021 - 2023</div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Preparing for university studies and professional life
              </p>
            </div>
            <div className="border-l-2 border-accent-red pl-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">Baccalaureate Deegre</h4>
              <div className="text-accent-red">Saint Joseph of Cluny • 2021 - 2023</div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Sience Catgory : Level GOOD
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Communications</h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="flex flex-wrap" >
                  <p className='bg-light-200 dark:bg-dark-600 rounded-sm w-3/4 p-2'>
                    <span><MG className='h-7 w-7' /></span>
                    <span className="text-gray-700 dark:text-white-100">Native</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap">
                  <p className='bg-light-200 dark:bg-dark-600 rounded-sm w-3/4 p-2'>
                    <span><FR className='h-7 w-7' /></span>
                    <span className="text-gray-700 dark:text-white-100">Fluent</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap">
                  <p className='bg-light-200 dark:bg-dark-600 rounded-sm w-3/4 p-2'>
                    <span><US className='h-7 w-7' /></span>
                    <span className="text-gray-700 dark:text-white-100">Professional</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap ">
                  <p className='bg-light-200 dark:bg-dark-600 rounded-sm w-3/4 p-2'>
                    <span><JP className='h-7 w-7' /></span>
                    <span className="text-gray-700 dark:text-white-100">Newbie</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 pt-6 border-t border-light-300 dark:border-dark-600">
            <div className="flex justify-center gap-4">
              <a href="https://github.com/rootkit7628" className="text-gray-600 dark:text-gray-400 hover:text-accent-red transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/arleme-jhn" className="text-gray-600 dark:text-gray-400 hover:text-accent-red transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="tel:+261386655099" className="text-gray-600 dark:text-gray-400 hover:text-accent-red transition-colors">
                <PhoneIcon className="h-6 w-6" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resume;