import React from 'react';
import { certifications, achievements, education } from '../data/portfolioData';
import { Award, BookOpen, GraduationCap, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          <span className="relative inline-block">
            Certifications & Education
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <Award className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="min-w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                      {cert.issuer && <p className="text-gray-400 text-sm">{cert.issuer}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center mt-12 mb-6">
              <Trophy className="text-purple-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/10 transition-shadow"
                >
                  <div className="flex items-center">
                    <span className="text-purple-400 text-lg mr-2">•</span>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="text-indigo-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-indigo-500/50 rounded-full"></div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg ml-4 hover:shadow-lg hover:shadow-indigo-500/10 transition-shadow">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.institution}</h4>
                    <p className="text-gray-300 mb-2">{edu.degree}</p>
                    <p className="text-indigo-400 font-medium">{edu.grade}</p>
                    
                    {index === 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <h5 className="text-lg font-medium text-white mb-2">Key Courses</h5>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">Data Structures</span>
                          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">Computer Networks</span>
                          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">Cybersecurity</span>
                          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full">Cloud Computing</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;