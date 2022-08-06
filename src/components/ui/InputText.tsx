export const InputText = () => {
  return (
    <div className='form__container'>
      <button className={`button-transparent`}></button>
      <input type={'text'} className='input__text' placeholder='Add todo...' />
    </div>
  );
};
