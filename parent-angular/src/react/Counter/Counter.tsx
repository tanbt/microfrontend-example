import { useCallback, useState, useEffect } from "react";
import "./Counter.scss";

export interface CounterProps {
  counter: number;
  onIncrease: () => void;
}

export const Counter = (props: CounterProps) => {
  const { counter, onIncrease } = props;

  return (
    <div>
      <div id="value">React value: {counter}</div>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
};
