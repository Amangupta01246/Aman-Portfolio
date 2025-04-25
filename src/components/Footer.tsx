import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-8 w-8 text-cyan-400 mr-2" />
            <span className="text-white font-bold text-xl">Aman Gupta</span>
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> in {currentYear}
            </p>
            <p className="mt-1 text-sm">Cybersecurity Enthusiast & Cloud Practitioner</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Aman Gupta. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;