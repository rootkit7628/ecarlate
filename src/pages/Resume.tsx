import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowLeft } from 'lucide-react';
import resume from '../assets/pdf/arleme-johnson-resume.pdf';

const Resume = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-red transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Portfolio
        </Link>
        
        <div className="bg-dark-800 rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-dark-600 pb-6 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Arleme Johnson</h1>
              <h2 className="text-xl text-accent-red mb-4">Full Stack Developer</h2>
              <div className="space-y-2 text-gray-400">
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
                  <span>Antananrivo 101, M/Car</span>
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
            <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-400 leading-relaxed">
              Experienced Full Stack Developer with 4+ years of expertise in building scalable web applications.
              Specialized in Python/VueJS. Passionate about creating efficient,
              maintainable code and delivering exceptional user experiences.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Work Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-accent-red pl-4">
                <h4 className="text-lg font-medium text-white">Senior Full Stack Developer</h4>
                <div className="text-accent-red mb-2">Tech Solutions Inc. • 2021 - Present</div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Led development of enterprise web applications using React and Node.js</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div className="border-l-2 border-accent-red pl-4">
                <h4 className="text-lg font-medium text-white">Frontend Developer</h4>
                <div className="text-accent-red mb-2">Digital Innovations Ltd • 2019 - 2021</div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Developed responsive web applications using Vue.js and TypeScript</li>
                  <li>Improved site performance by 40% through optimization techniques</li>
                  <li>Integrated third-party APIs and implemented real-time features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-accent-red mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-dark-700 rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-accent-red mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-dark-700 rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="border-l-2 border-accent-red pl-4">
              <h4 className="text-lg font-medium text-white">Bachelor of Science in Computer Science</h4>
              <div className="text-accent-red">University of Technology • 2015 - 2019</div>
              <p className="text-gray-400 mt-2">
                Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 pt-6 border-t border-dark-600">
            <div className="flex justify-center gap-4">
              <a href="https://github.com" className="text-gray-400 hover:text-accent-red transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-accent-red transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resume;