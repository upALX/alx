'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { SunDim, MoonStar } from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Initialize client-side handling of theme to prevent React hydration issues
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true); // Set mounted state to true once the component mounts
  }, []);

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
  };

  if (!isMounted) {
    return null; // Prevent rendering until the component is mounted
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
