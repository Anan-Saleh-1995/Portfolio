import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import type { ExperienceTypes, SocialLink } from '@/lib/types';

export const about = {
  title: 'About Me',
  paragraphs:[`
  I’m a fullstack JavaScript developer with expertise in React and Node.js and over three years of experience building web applications, I enjoy working both on front-end and back-end be it figma designs or writing a docker file that will run my project on AWS EC2.`,
  'Learning new tech or a software language has always excited me and currently expanding my knowledge and experience with languages such as but not limited to php, C#.',
  'I’m always about micro improvement with a bigger picture in mind that allows me to reach my goals in any field not just programming ',
  'I’m currently working on side projects along side this portfolio and testing out new techs and languages both on front-end and back-end']
};


export const experiences: ExperienceTypes[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'PlasBit Ltd',
    period: '2022 – 2025',
    location: 'Yokneam, Israel',
    description: `At PlasBit I worked as a full stack developer, building applications with React on the frontend and Node.js on the backend.
     I had the chance to dive into both sides of development — creating user-friendly interfaces and wiring them up with APIs, server logic, and MongoDB.
     I collaborated closely with designers to bring Figma designs to life, worked with the SEO team to improve visibility, and coordinated with DevOps on AWS services like EC2 and S3. It was a role that gave me a full picture of how products move from idea to deployment.`,
    tech: ['React', 'Nodejs', 'MongoDB', 'JavaScript', 'AWS', 'Figma', 'git'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Password Generator',
    description: 'A tool that generates random password',
    img: 'images/password-generator.png',
    techStack: ['react', 'typescript', 'vite', 'shadcn', 'tailwind', 'vercel'],
    github: 'https://github.com/Anan-Saleh-1995/Password-Generator',
    liveDemo: 'https://password-generator-self-tau.vercel.app/',
  },
  {
    id: 2,
    title: 'Movies App',
    description: 'A Website for Movies and TV shows, users can add to their watchlist movies',
    img: 'images/password-generator.png',
    techStack: ['react', 'typescript', 'vite', 'shadcn', 'tailwind', 'vercel'],
    github: 'https://github.com/Anan-Saleh-1995/Password-Generator',
    liveDemo: 'https://password-generator-self-tau.vercel.app/',
  }
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/anan-saleh-1995', icon: GitHubLogoIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedInLogoIcon },
  { label: 'Twitter', href: '#', icon: TwitterLogoIcon },
];

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
