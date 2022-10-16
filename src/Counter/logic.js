import { useEffect, useState } from 'react';

export function useCounterLogic(from, CounterDisplay) {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(`I'm a dumb component in ${from}`);

  useEffect(() => {
    if (counter > 5 || counter < -5) {
      setText(`Or maybe ${from} can make me smarter?`);
    }
  }, [counter, from]);

  const handleIncrement = () => setCounter(counter + 1);

  const handleDecrement = () => setCounter(counter - 1);

  return {
    counter: <CounterDisplay>{counter}</CounterDisplay>,
    text,
    handleIncrement,
    handleDecrement,
  };
}