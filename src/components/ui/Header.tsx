import { useContext } from 'react';
import sunButton from '../../assets/images/icon-sun.svg';
import moonButton from '../../assets/images/icon-moon.svg';
import { UIContext } from '../../context/ui/UIContext';

export const Header = () => {
  const { theme, switchTheme } = useContext(UIContext);

  const handleClick = (newTheme: string) => {
    switchTheme(newTheme);
  };

  return (
    <header className='header-title'>
      <h1 className='letter-spacing-2 fc-white fw-700 fs-3 pb-2'>TODO</h1>
      <button
        className='button-transparent fc-regular'
        onClick={() => {
          handleClick(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        <img
          src={theme === 'dark' ? sunButton : moonButton}
          alt={
            theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
          }
        />
      </button>
    </header>
  );
};
