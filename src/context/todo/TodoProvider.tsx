import { FC, useEffect, useReducer } from 'react';
import { getItem, saveItem } from '../../helpers/localStorage';
import { todo } from '../../interfaces/todo';
import { TodoContext, todoReducer } from './';
import { todoTempList } from '../../data/todoList';

export interface TodoState {
  todos: todo[];
  count: number;
  show: 'all' | 'active' | 'completed';
}

const TODO_INITIAL_STATE: TodoState = {
  todos: todoTempList,
  count: todoTempList.length,
  show: 'all',
};

interface Props {
  children: React.ReactNode;
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, TODO_INITIAL_STATE);

  const completeTodo = (todoItem: todo) => {
    const newList = state.todos.map((t) => {
      if (t.id === todoItem.id) t.isCompleted = todoItem.isCompleted;
      return t;
    });

    saveItem('todoList', newList);
    dispatch({ type: '[todo] - Complete todo', payload: { ...todoItem } });
  };

  const addTodo = (todoItem: todo) => {
    console.log('addtodo');
    /* const newList = [...state.todos, todoItem];
    console.log('object');
    saveItem('todoList', newList);
    dispatch({ type: '[todo] - Add todo', payload: { ...todoItem } });*/
  };

  const deleteTodo = (id: string) => {
    const newList = state.todos.filter((todo) => todo.id !== id);
    saveItem('todoList', newList);
    dispatch({ type: '[todo] - Delete todo', payload: id });
  };

  const filterTodos = (filter: 'all' | 'active' | 'completed') => {
    let todoList: todo[] = getItem('todoList');

    if (filter === 'active')
      todoList = todoList.filter((todo) => !todo.isCompleted);
    if (filter === 'completed')
      todoList = todoList.filter((todo) => todo.isCompleted);

    dispatch({
      type: '[todo] - Filter todos',
      payload: { show: filter, todos: todoList },
    });
  };

  const clearCompleted = () => {
    const newList = state.todos.filter((todo) => !todo.isCompleted);
    saveItem('todoList', newList);
    dispatch({ type: '[todo] - Clear completed' });
  };

  const refreshTodos = async () => {
    const todoListStored = getItem('todoList', TODO_INITIAL_STATE.todos);
    dispatch({ type: '[todo] - Refresh todos', payload: todoListStored });
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        ...state,
        completeTodo,
        deleteTodo,
        clearCompleted,
        filterTodos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
