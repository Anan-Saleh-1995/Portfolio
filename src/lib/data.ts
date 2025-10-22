import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import type { ExperienceTypes, SocialLink } from '@/lib/types';

export const about = {
  title: 'About Me',
  paragraphs: [
    'I’m Anan Saleh, a full-stack developer who enjoys turning ideas into working products.',
    'My journey has been shaped by constant curiosity — from experimenting with small projects to building complete applications.',
    'I care about details, clean structure, and the feeling of flow when code and design come together.',
    'Outside of coding challenges and portfolio projects, I’m always looking for ways to improve how I build, learn, and share my work.',
  ],
};

export const experiences: ExperienceTypes[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'PlasBit Ltd',
    period: '2022 – 2025',
    location: 'Yokneam, Israel',
    description: 'At PlasBit I worked as a full stack developer, building web applications with React and Node.js. Most of my time was spent coding in JavaScript, integrating APIs, and shaping the frontend with Figma designs. Along the way, I reviewed code from outsourced developers to keep things consistent and maintainable.',
    tech: ['React', 'Nodejs', 'MongoDB', 'JavaScript', 'AWS', 'Figma'],
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
