import {
  ChangeEvent,
  FormEventHandler,
  KeyboardEventHandler,
  useContext,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { todo } from '../../interfaces/todo';
import { TodoContext } from '../../context/todo';
import { saveItem } from '../../helpers/localStorage';

export const InputText = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submit = (e: any) => {
    e.preventDefault();
    const item: todo = {
      id: uuidv4(),
      description: inputValue,
      isCompleted: false,
    };

    setInputValue('');
  };

  return (
    <form className='form__container' onSubmit={submit}>
      <button className={`button-transparent`}></button>
      <input
        type={'text'}
        value={inputValue}
        onChange={onTextFieldChanged}
        className='input__text'
        placeholder='Add todo...'
      />
    </form>
  );
};
