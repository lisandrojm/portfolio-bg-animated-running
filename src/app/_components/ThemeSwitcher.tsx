/* src/app/_components/ThemeSwitcher.tsx */

'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Import the Icon component
import Icon from './_icons/ButtonsIcons';

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
      return <Icon kind="moon" size={2} color="orange" onClick={() => setTheme('light')} />;
    } else {
      return <Icon kind="sun" size={2} color="orange" onClick={() => setTheme('dark')} />;
    }
  };

  return <>{renderThemeChanger()}</>;
}
