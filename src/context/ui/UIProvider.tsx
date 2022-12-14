import { FC, useEffect, useReducer } from 'react';
import {
  getItem,
  getString,
  saveItem,
  saveString,
} from '../../helpers/localStorage';
import { UIContext, uiReducer } from './';

export interface UIState {
  theme: string;
}

const UI_INITIAL_STATE: UIState = {
  theme: 'dark',
};

interface Props {
  children: React.ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const switchTheme = (theme: string) => {
    dispatch({ type: '[UI] - Switch theme', payload: theme });
    saveString('theme', theme);
  };

  useEffect(() => {
    const themeStored = getString('theme', state.theme);
    dispatch({ type: '[UI] - Switch theme', payload: themeStored });
  }, []);

  return (
    <UIContext.Provider value={{ ...state, switchTheme }}>
      {children}
    </UIContext.Provider>
  );
};
