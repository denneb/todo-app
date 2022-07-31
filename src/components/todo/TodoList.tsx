import { FC } from 'react';
import checkButton from '../../assets/images/icon-check.svg';
import { TodoRow, InfoBar } from './';

export const TodoList: FC = () => {
  return (
    <div className='todo__list '>
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow />

      <InfoBar />
    </div>
  );
};
