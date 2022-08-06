import { TodoList } from '../../components/todo';
import { todo } from '../../interfaces/todo';
import { TodoState } from './';

type todoActionType =
  | { type: '[todo] - Add todo'; payload: todo }
  | { type: '[todo] - Delete todo'; payload: string }
  | { type: '[todo] - Complete todo'; payload: todo }
  | { type: '[todo] - Refresh todos'; payload: todo[] }
  | {
      type: '[todo] - Filter todos';
      payload: { show: 'all' | 'active' | 'completed'; todos: todo[] };
    }
  | { type: '[todo] - Clear completed' };

export const todoReducer = (
  state: TodoState,
  action: todoActionType
): TodoState => {
  switch (action.type) {
    case '[todo] - Add todo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case '[todo] - Delete todo':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        count: state.todos.filter(
          (todo) => todo.id !== action.payload && !todo.isCompleted
        ).length,
      };

    case '[todo] - Clear completed':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
        count: state.todos.filter((todo) => !todo.isCompleted).length,
      };
    case '[todo] - Filter todos':
      return {
        ...state,
        show: action.payload.show,
        todos: action.payload.todos,
        count: state.todos.filter((todo) => !todo.isCompleted).length,
      };
    case '[todo] - Complete todo':
      const resp = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.isCompleted = action.payload.isCompleted;
          }
          return todo;
        }),
        count: state.todos.filter((todo) => !todo.isCompleted).length,
      };

      return resp;
    case '[todo] - Refresh todos':
      return {
        ...state,
        todos: [...action.payload],
        count: action.payload.filter((todo) => !todo.isCompleted).length,
      };
    default:
      return state;
  }
};
