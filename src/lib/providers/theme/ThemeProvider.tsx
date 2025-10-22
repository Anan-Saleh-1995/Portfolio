import { useEffect, useState } from 'react';
import { ThemeContext } from '@/lib/providers/theme/ThemeContext';
import type { Theme } from '@/lib/types';
import { THEME } from '@/lib/utils';

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
};

export function ThemeProvider({
  children,
  defaultTheme = THEME.SYSTEM,
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(THEME.LIGHT, THEME.DARK);

    if (theme === 'system') {
      const systemTheme = window.matchMedia(`(prefers-color-scheme: ${THEME.DARK})`)
        .matches
        ? THEME.DARK
        : THEME.LIGHT;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
