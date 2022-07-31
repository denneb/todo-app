import checkButton from '../../assets/images/icon-check.svg';

export const TodoRow = () => {
  return (
    <div className='todo__row fc-regular '>
      <div className='border-wrap'>
        <button className='button-transparent button-active'>
          <img src={checkButton} alt='Checked item' />
        </button>
      </div>
      <div>Texto de prueba</div>
    </div>
  );
};
