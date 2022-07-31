import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className='base theme__light'>
      <div className='main-layout'>
        <div className='header'></div>
        {children}
      </div>
    </div>
  );
};
