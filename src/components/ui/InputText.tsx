import { ChangeEvent, FC, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { todo } from '../../interfaces/todo';
import { TodoContext } from '../../context/todo';

export const InputText: FC = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submit = (e: any) => {
    e.preventDefault();
    const item: todo = {
      id: uuidv4(),
      description: inputValue,
      isCompleted: false,
    };
    addTodo(item);
    setInputValue('');
  };

  return (
    <div className='form__container'>
      <form onSubmit={submit}>
        <button className={`button-transparent`}></button>
        <input
          className='input__text'
          value={inputValue}
          onChange={handleChange}
          placeholder='Add todo...'
        />
      </form>
    </div>
  );
};
