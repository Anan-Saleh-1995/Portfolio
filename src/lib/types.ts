import React from 'react';
import type { THEME } from '@/lib/utils';

export type Theme = (typeof THEME)[keyof typeof THEME];

export type SectionWrapperProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: React.ElementType;
  ariaLabel?: string;
};

export type ExperienceTypes = {
  id: number,
  role: string
  company: string
  period: string
  location: string
  description: string,
  tech: string[]
};

export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  techStack: string[];
  github: string;
  liveDemo: string;
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
  website: string;
};
