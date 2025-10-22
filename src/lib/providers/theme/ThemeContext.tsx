import { createContext } from 'react';
import type { Theme } from '@/lib/types';

export type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
};

export const ThemeContext = createContext<ThemeState | undefined>(undefined);
