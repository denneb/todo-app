import { useContext } from 'react';
import { TodoContext } from '../../context/todo';

export const InfoBar = () => {
  const { count, clearCompleted, show, filterTodos } = useContext(TodoContext);

  return (
    <>
      <div className='todo__list-actions  fs-1'>
        <button className='  button__rectangle-transparent'>
          {count} items left
        </button>
        <div className='todo__filter fc-active fw-700'>
          <button
            onClick={() => {
              filterTodos('all');
            }}
            className={`${
              show === 'all' && 'fc-selected'
            } button__rectangle-transparent`}
          >
            All
          </button>
          <button
            onClick={() => {
              filterTodos('active');
            }}
            className={`${
              show === 'active' && 'fc-selected'
            } button__rectangle-transparent`}
          >
            Active
          </button>
          <button
            onClick={() => {
              filterTodos('completed');
            }}
            className={`${
              show === 'completed' && 'fc-selected'
            } button__rectangle-transparent`}
          >
            Completed
          </button>
        </div>
        <button
          onClick={clearCompleted}
          className=' fs-1 fw-400 button__rectangle-transparent'
        >
          Clear completed
        </button>
      </div>
    </>
  );
};
