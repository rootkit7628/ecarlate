import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  company?: string;
  name?: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-red"></div>
      
      {items.map((item, index) => (
        <div key={index} className="relative flex items-start mb-12 last:mb-0">
          {/* Timeline dot */}
          <div className="absolute left-4 w-4 h-4 bg-accent-red rounded-full border-4 border-light-50 dark:border-dark-900 z-10"></div>
          
          {/* Content */}
          <div className="ml-16 flex-1">
            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg hover:bg-light-100 dark:hover:bg-dark-700 transition-colors duration-300 shadow-lg dark:shadow-none">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.company || item.name}
                </h4>
                <span className="text-accent-red flex items-center flex-shrink-0 ml-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.period}
                </span>
              </div>
              <p className="text-lg text-accent-red mb-2">{item.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              {item.tech && (
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-light-200 dark:bg-dark-600 text-sm text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;