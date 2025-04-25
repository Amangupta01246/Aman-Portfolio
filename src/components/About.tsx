import React from 'react';
import { aboutMe } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="relative">
                <span className="absolute -left-4 -top-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md opacity-50 blur-xl"></span>
                <Terminal className="inline-block mr-3 text-cyan-400" size={28} />
                About Me
              </span>
            </h2>
            
            <div className="relative overflow-hidden rounded-lg p-1 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <div className="bg-gray-900 rounded-lg p-6 relative z-10">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {aboutMe}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['Ethical Hacking', 'Cloud Computing', 'Network Security', 'AWS', 'Penetration Testing'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-700"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Started Learning Programming</h4>
                      <p className="text-gray-400">Began with C++ and developed a strong foundation in programming concepts</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-700"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Discovered Cybersecurity</h4>
                      <p className="text-gray-400">Found my passion in ethical hacking and security techniques</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-700"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Cloud Computing Experience</h4>
                      <p className="text-gray-400">Expanded skills into AWS and cloud infrastructure</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Present</h4>
                      <p className="text-gray-400">Continuously learning and building secure systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;