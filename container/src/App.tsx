import * as React from "react";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = React.useState(123);

  return (
    <div>
      <h1>Typescript</h1>
      <h2>Container</h2>
      <Counter counter={count} onIncrease={() => setCount(count + 1)} />
    </div>
  );
};

export default App;
