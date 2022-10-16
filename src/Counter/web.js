import { useCounterLogic } from './logic';

export function Counter() {
  const { counter, text, handleIncrement, handleDecrement } = useCounterLogic(
    'React Web',
    CounterDisplay);

  return (
    <>
      <div>{text}</div>
      <div>
        <button onClick={handleDecrement}>-1</button>
        {counter}
        <button onClick={handleIncrement}>+1</button>
      </div>
    </>
  );
}

const CounterDisplay = ({ children }) => <strong>{children}</strong>;
