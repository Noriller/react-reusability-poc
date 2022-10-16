import { useAppLogic } from './logic';

export function App() {
  const { counter, text, handleIncrement, handleDecrement } = useAppLogic('React Web');

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