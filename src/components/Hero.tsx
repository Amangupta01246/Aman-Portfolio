import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi! I'm Aman — passionate about ethical hacking, cybersecurity, and building secure cloud infrastructures. I love solving problems, writing scripts, and fortifying digital systems.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-800 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6 inline-block p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
          <img 
            src="/public/image.jpg" 
            alt="Aman Gupta" 
            className="w-32 h-32 md:w-40 md:h-40 rounded object-cover object-center border-4 border-gray-800"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Aman Gupta</h1>
        
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
          <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Cybersecurity Enthusiast</span>
          <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Cloud Practitioner</span>
          <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Developer</span>
        </div>
        
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 h-32">
          {displayText}
          <span className="animate-pulse text-cyan-400">|</span>
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <ChevronDown size={32} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;