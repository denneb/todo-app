import { useEffect, useState } from 'react';
import { getItem, saveItem } from '../helpers/localStorage';

const initialTheme = 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [error, setError] = useState(false);

  useEffect(() => {
    const theme = getItem('theme', 'dark');
    if (theme) {
      setTheme(theme);
    } else {
      setError(true);
    }
  }, []);

  const setThemeLS = (theme: string) => {
    setTheme(theme);
    saveItem('theme', theme);
  };

  return { theme, setThemeLS, error };
};
