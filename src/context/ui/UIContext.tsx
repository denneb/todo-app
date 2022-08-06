import { createContext } from 'react';

export interface UIContextProps {
  theme: string;
  switchTheme: (theme: string) => void;
}

export const UIContext = createContext({} as UIContextProps);
