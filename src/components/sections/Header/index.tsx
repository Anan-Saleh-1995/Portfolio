import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { THEME } from '@/lib/utils';
import { useTheme } from '@/lib/providers/theme/useTheme';
import { navItems } from '@/lib/data';

export const Header = () => {

  const { theme, setTheme } = useTheme();
  const isDark = theme === THEME.DARK;

  return (
    <header className='sticky top-0 z-1'>
      <div className="mt-2 rounded-4xl backdrop-blur-md z-10">
        <div className="flex h-14 items-center justify-between px-6">
          <div className="font-bold text-xl leading-none">Anan Saleh</div>
          <div className="flex gap-6 items-center">
            <NavigationMenu className="hidden sm:flex">
              <NavigationMenuList className="gap-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-sm font-medium leading-6 hover:bg-transparent hover:text-emerald-500  transition-colors "
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? THEME.LIGHT : THEME.DARK)}
              className="hover:rounded-4xl"
              style={{
                cursor: 'pointer',
              }}
            >
              {isDark ? (
                <MoonIcon />
              ) : (
                <SunIcon />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
