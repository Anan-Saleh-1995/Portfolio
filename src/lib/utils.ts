import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export const TECH_STACK = {
  REACT: 'react',
  VITE: 'vite',
  JAVASCRIPT: 'javascript',
  TYPESCRIPT: 'typescript',
  TAILWIND: 'tailwind',
  SHADCN: 'shadcn',
  NODEJS: 'nodejs',
  MONGODB: 'mongodb',
  AWS: 'aws',
  FIGMA: 'figma',
  GIT: 'git',
  GITHUB: 'github',
  VERCEL: 'vercel',
  JIRA: 'jira',
  BITBUCKET: 'bitbucket',
} as const;
