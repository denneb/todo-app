import { createContext } from 'react';
import { todo } from '../../interfaces/todo';

export interface TodoContextProps {
  todos: todo[];
  count: number;
  show: 'all' | 'active' | 'completed';
  addTodo: (todoItem: todo) => void;
  completeTodo: (todoItem: todo) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  filterTodos: (filter: 'all' | 'active' | 'completed') => void;
}

export const TodoContext = createContext({} as TodoContextProps);
