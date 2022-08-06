import { FC, useContext, useEffect, useState } from 'react';

import { TodoRow, InfoBar } from './';

import { TodoContext } from '../../context/todo';

export const TodoList: FC = () => {
  const { todos: todoList } = useContext(TodoContext);

  return (
    <>
      <div className='todo__list '>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((item) => <TodoRow key={item.id} todoItem={item} />)}
        <InfoBar />
      </div>
      <div className='todo__filter-mobile fc-active fw-700'>
        <button className='fc-selected button__rectangle-transparent'>
          All
        </button>
        <button className=' button__rectangle-transparent'>Active</button>
        <button className='button__rectangle-transparent'>Completed</button>
      </div>
    </>
  );
};
