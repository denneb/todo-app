import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './TodoApp';
import { UIProvider } from './context/ui';

import './sass/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIProvider>
      <TodoApp />
    </UIProvider>
  </React.StrictMode>
);
