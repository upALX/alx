'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { RxMoon } from 'react-icons/rx';
import { GiSun } from 'react-icons/gi';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
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
        {isDarkMode ? (
          <RxMoon className="w-6 h-6" />
        ) : (
          <GiSun className="w-6 h-6" />
        )}
      </Label>
    </div>
  );
}
