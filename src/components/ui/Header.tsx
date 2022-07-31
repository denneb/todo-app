import themeButton from '../../assets/images/icon-sun.svg';

export const Header = () => {
  return (
    <header className='header-title'>
      <h1 className='letter-spacing-2 fc-white fw-700 fs-3 pb-2'>TODO</h1>
      <button className='button-transparent fc-regular'>
        <img src={themeButton} alt='Switch to light theme' />
      </button>
    </header>
  );
};
