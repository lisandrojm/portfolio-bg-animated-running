/* src/app/_components/ThemeSwitcher.tsx */

'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/outline';
import { MoonIcon } from '@heroicons/react/solid';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return <MoonIcon className="w-6 h-6 text-orange m-2" role="button" onClick={() => setTheme('light')} />;
    } else {
      return <SunIcon className="w-6 h-6 text-orange  m-2" role="button" onClick={() => setTheme('dark')} />;
    }
  };

  return <>{renderThemeChanger()}</>;
}
