import State from '../scripts/State';

function Delay() {
  const { delay } = State.getState();
  return (
    <div className='p-2'>
      <label className='form-label'>
        {'Simulated Delay:'}
      </label>
      <input
        className='form-input text-center'
        max={5000}
        min={0}
        type={'number'}
        value={delay}
        onChange={(e) => State.onDelay(e.target.value)}
      />
      <input
        className='form-range'
        max={5000}
        min={0}
        type={'range'}
        value={delay}
        onChange={(e) => State.onDelay(e.target.value)}
      />
    </div>
  );
}
export default Delay;