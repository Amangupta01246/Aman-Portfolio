import { Skill, Project, Experience, Certification, Achievement, Education, ContactInfo } from '../types';

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C++', 'C', 'Java', 'Python', 'HTML', 'CSS', 'SQL']
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Kali Linux', 'Wireshark', 'Burp Suite', 'Nmap', 'Hydra', 
      'Metasploit', 'Canva', 'Figma', 'AWS (EC2, S3, IAM, VPC, Route 53)', 
      'Cisco Packet Tracer'
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      'Problem-Solving', 'Teamwork', 'Adaptability', 
      'Leadership', 'Communication', 'Creativity'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Lightweight iptables Firewall on Kali Linux',
    period: 'Jan 2025',
    description: [
      'Built a firewall using iptables on Kali Linux for securing network traffic',
      'Automated configuration with bash script',
      'Achieved 100% protection in simulations'
    ]
  },
  {
    title: 'Windows Keylogger with Encrypted Email Exfiltration',
    period: 'May 2024',
    description: [
      'Python-based stealth keylogger with Base64 encryption',
      'Simulated ethical attack techniques in controlled environments'
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: 'Cybersecurity Intern',
    company: 'Shadowfox',
    period: 'Oct 2024',
    description: [
      'Conducted penetration testing, deauthentication attacks, Wi-Fi handshake cracking, reverse shell payloads, etc.'
    ]
  },
  {
    role: 'AWS Cloud Computing Trainee',
    company: 'Gokboru Tech Pvt Ltd',
    period: 'Jun-Jul 2024',
    description: [
      'Deployed secure, scalable applications on AWS with high uptime and disaster recovery'
    ]
  }
];

export const certifications: Certification[] = [
  { title: 'Ethical Hacking Essentials (EHE)' },
  { title: 'CompTIA Linux+ XK0-005', issuer: 'Cybrary' },
  { title: 'Digital Forensics Essentials (DFE)' },
  { title: 'Google Cybersecurity Professional Certificate', issuer: 'Coursera' },
  { title: 'Introduction to Cybersecurity Essentials', issuer: 'IBM' }
];

export const achievements: Achievement[] = [
  { description: 'Solved 100+ Java problems on LeetCode' },
  { description: 'HackerRank Python – 4-star badge' }
];

export const education: Education[] = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech CSE',
    grade: 'CGPA: 7.0'
  },
  {
    institution: 'R.P.M Academy',
    degree: 'Intermediate',
    grade: '74%'
  },
  {
    institution: 'R.P.M Academy',
    degree: 'Matriculation',
    grade: '68%'
  }
];

export const contactInfo: ContactInfo = {
  email: 'amangupta01246@gmail.com',
  phone: '+91-9511090108',
  linkedin: 'linkedin.com/in/amangupta01246',
  github: 'github.com/Amangupta01246'
};

export const aboutMe = `I'm currently pursuing my B.Tech in Computer Science at Lovely Professional University. With hands-on experience in penetration testing, AWS cloud deployments, and ethical hacking, I specialize in strengthening digital security systems. I've earned certifications from Google, IBM, and Cybrary, and I love learning through real-world projects and technical challenges.`;