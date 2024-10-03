'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { StarsBackground } from '@/components/patterns/stars-background-pattern';
import { ShootingStars } from '@/components/patterns/shooting-stars-baclground';

export function ThemeEffect() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (theme !== 'dark') {
    return null;
  }

  return (
    <>
      <StarsBackground />
      <ShootingStars />
    </>
  );
}
