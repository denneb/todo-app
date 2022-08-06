import { FC, useContext } from 'react';
import { UIContext } from '../../context/ui';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const { theme } = useContext(UIContext);
  return (
    <div className={`base theme__${theme}`}>
      <div className='main-layout'>
        <div className='header'></div>
        {children}
      </div>
    </div>
  );
};
