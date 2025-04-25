// Common types used throughout the application
export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer?: string;
}

export interface Achievement {
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period?: string;
  grade: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}