/// <reference types="react" />

interface CounterProps {
  counter: number;
  onIncrease: () => void;
}

declare module "container/Counter" {
  const Counter: React.ComponentType<CounterProps>;
  export default Counter;
}
