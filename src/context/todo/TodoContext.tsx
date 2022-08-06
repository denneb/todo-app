import { createContext } from 'react';
import { todo } from '../../interfaces/todo';

export interface TodoContextProps {
  todos: todo[];
  count: number;
  completeTodo: (todoItem: todo) => void;
  deleteTodo: (id: string) => void;
}

export const TodoContext = createContext({} as TodoContextProps);
