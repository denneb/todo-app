import { FC, useEffect, useReducer } from 'react';
import { getItem, saveItem } from '../../helpers/localStorage';
import { todo } from '../../interfaces/todo';
import { TodoContext, todoReducer } from './';
import { todoTempList } from '../../data/todoList';

export interface TodoState {
  todos: todo[];
  count: number;
}

const TODO_INITIAL_STATE: TodoState = {
  todos: todoTempList,
  count: todoTempList.length,
};

interface Props {
  children: React.ReactNode;
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, TODO_INITIAL_STATE);

  const completeTodo = (todoItem: todo) => {
    dispatch({ type: '[todo] - Complete todo', payload: todoItem });

    saveItem('todoList', [...state.todos]);
  };

  const deleteTodo = (id: string) => {
    console.log('delete todo');
    dispatch({ type: '[todo] - Delete todo', payload: id });
  };

  const refreshTodos = async () => {
    const todoListStored = getItem('todoList', TODO_INITIAL_STATE.todos);
    dispatch({ type: '[todo] - Refresh todos', payload: todoListStored });
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ ...state, completeTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
