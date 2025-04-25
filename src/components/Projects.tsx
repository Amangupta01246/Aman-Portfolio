import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Shield, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          <span className="relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-cyan-900/50 rounded-lg mr-3">
                      <Shield className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <span className="text-sm text-gray-400">{project.period}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 mt-4 transition-opacity duration-300 ${activeProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Code size={16} className="mr-1" />
                    View Code
                  </button>
                  <button className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} className="mr-1" />
                    Project Details
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-transparent border-2 border-gray-700 text-gray-300 font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all">
            See More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;