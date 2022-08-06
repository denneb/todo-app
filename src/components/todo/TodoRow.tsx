import { FC, useContext, useState } from 'react';
import checkButton from '../../assets/images/icon-check.svg';
import deleteButton from '../../assets/images/icon-cross.svg';
import { TodoContext } from '../../context/todo';
import { todo } from '../../interfaces/todo';

interface Props {
  todoItem: todo;
}

export const TodoRow: FC<Props> = ({ todoItem }) => {
  const [hover, setHover] = useState<boolean>(false);
  const { todos: todoList, deleteTodo, completeTodo } = useContext(TodoContext);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`todo__row ${
        todoItem.isCompleted ? 'fc-inactive' : 'fc-regular'
      }`}
    >
      <div className='border-wrap'>
        <button
          onClick={() => {
            completeTodo({ ...todoItem, isCompleted: !todoItem.isCompleted });
          }}
          className={`button-transparent ${
            todoItem.isCompleted && 'button-active'
          }`}
        >
          {todoItem.isCompleted && <img src={checkButton} alt='Checked item' />}
        </button>
      </div>
      <div
        className={`todo-description ${
          todoItem.isCompleted ? 'line-through' : ''
        }`}
      >
        {todoItem.description}
      </div>
      {hover && (
        <button
          onClick={() => {
            deleteTodo(todoItem.id);
          }}
          className='button-invisible'
        >
          <img src={deleteButton} alt='Delete item' />
        </button>
      )}
    </div>
  );
};
