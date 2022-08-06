import { useContext } from 'react';
import { TodoContext } from '../../context/todo';

export const InfoBar = () => {
  const { count } = useContext(TodoContext);

  return (
    <>
      <div className='todo__list-actions  fs-1'>
        <button className='  button__rectangle-transparent'>
          {count} items left
        </button>
        <div className='todo__filter fc-active fw-700'>
          <button className='fc-selected button__rectangle-transparent'>
            All
          </button>
          <button className=' button__rectangle-transparent'>Active</button>
          <button className='button__rectangle-transparent'>Completed</button>
        </div>
        <button className=' fs-1 fw-400 button__rectangle-transparent'>
          Clear completed
        </button>
      </div>
    </>
  );
};
