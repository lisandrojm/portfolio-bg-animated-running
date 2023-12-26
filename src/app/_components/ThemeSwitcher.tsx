/* src/app/_components/ThemeSwitcher.tsx */

'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

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
      return <FaMoon className="text-2xl text-orange" role="button" onClick={() => setTheme('light')} />;
    } else {
      return <FaSun className="text-2xl text-orange" role="button" onClick={() => setTheme('dark')} />;
    }
  };

  return <>{renderThemeChanger()}</>;
}
