'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { SunDim, MoonStar } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    if (theme) {
      setIsDarkMode(theme === 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Switch
        id="theme-changer"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
      />
      <Label htmlFor="theme-changer">
        {isDarkMode ? <MoonStar /> : <SunDim />}
      </Label>
    </div>
  );
}
