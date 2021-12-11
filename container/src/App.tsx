import * as React from "react";
import LocalButton from "./Button";
import { Counter } from "./Counter";

const App = () => {
  const [count, setCount] = React.useState(123);

  return (
    <div>
      <h1>Typescript</h1>
      <h2>Container</h2>
      <LocalButton />
      <Counter counter={count} onIncrease={() => setCount(count + 1)} />
    </div>
  );
};

export default App;
