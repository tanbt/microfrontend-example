/// <reference types="react" />

declare module "container/Button" {
  const Button: React.ComponentType;
  export default Button;
}

interface CounterProps {
  counter: number;
  onIncrease: () => void;
}

declare module "container/Counter" {
  const Counter: React.ComponentType<CounterProps>;
  export default Counter;
}
