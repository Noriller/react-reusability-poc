import { useCounterLogic } from './logic';

export function Counter() {
  const { counter, text, handleIncrement, handleDecrement } = useCounterLogic('React Web');

  return (
    <>
      <div>{text}</div>
      <div>
        <button onClick={handleDecrement}>-1</button>
        <strong>{counter}</strong>
        <button onClick={handleIncrement}>+1</button>
      </div>
    </>
  );
}