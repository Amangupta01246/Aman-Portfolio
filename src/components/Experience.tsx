import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Building } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          <span className="relative inline-block">
            Professional Experience
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gray-700 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-12 relative"
              >
                <div className="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Briefcase className="text-white" size={16} />
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm text-gray-400 mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Building className="text-cyan-400 mr-2" size={16} />
                    <span className="text-gray-300">{exp.company}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {index === 0 ? (
                      <>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full">Penetration Testing</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full">Network Security</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full">Ethical Hacking</span>
                      </>
                    ) : (
                      <>
                        <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">AWS</span>
                        <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">Cloud Infrastructure</span>
                        <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">DevOps</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;