import { createContext } from 'react';
import { todo } from '../../interfaces/todo';

export interface TodoContextProps {
  todos: todo[];
  count: number;
  show: 'all' | 'active' | 'completed';
  completeTodo: (todoItem: todo) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  filterTodos: (filter: 'all' | 'active' | 'completed') => void;
  addTodo: (todoItem: todo) => void;
}

export const TodoContext = createContext({} as TodoContextProps);
