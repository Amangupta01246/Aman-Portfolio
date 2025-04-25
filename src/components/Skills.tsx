import React from 'react';
import { skills } from '../data/portfolioData';
import { Code, Server, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Languages': <Code className="text-cyan-400" size={20} />,
  'Tools & Platforms': <Server className="text-indigo-400" size={20} />,
  'Soft Skills': <Users className="text-purple-400" size={20} />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          <span className="relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="bg-gray-900 p-4 border-b border-gray-700">
                <h3 className="text-xl font-bold text-white flex items-center">
                  {iconMap[skillGroup.category]}
                  <span className="ml-2">{skillGroup.category}</span>
                </h3>
              </div>
              
              <div className="p-6">
                <ul className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <li 
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium 
                        ${skillGroup.category === 'Languages' 
                          ? 'bg-cyan-900/30 text-cyan-300 border border-cyan-800/50' 
                          : skillGroup.category === 'Tools & Platforms'
                            ? 'bg-indigo-900/30 text-indigo-300 border border-indigo-800/50'
                            : 'bg-purple-900/30 text-purple-300 border border-purple-800/50'
                        }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-gray-800/50 p-5 rounded-lg backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Security-First Mindset</h4>
              <p className="text-gray-300">I approach every project with security as the foremost priority, ensuring robust protection against vulnerabilities.</p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-lg backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Cloud-Native Solutions</h4>
              <p className="text-gray-300">Leveraging AWS and modern cloud architectures to build scalable, resilient systems with high availability.</p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-lg backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Continuous Learning</h4>
              <p className="text-gray-300">The cybersecurity landscape evolves rapidly. I stay current with emerging threats and defense techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;