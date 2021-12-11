import { useCallback, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrease = useCallback(() => setCount(count - 1), [count]);

  return (
    <div>
      <div id="value">React value: {count}</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
