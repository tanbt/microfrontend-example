import * as React from "react";

// React.lazy only supports for Default exports.
const RemoteButton = React.lazy(() => import("container/Button"));
const RemoteCounter = React.lazy(() => import("container/Counter"));

const App = () => {
  const [count, setCount] = React.useState(456);

  return (
    <div>
      <h1>Typescript</h1>
      <h2>Host</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
        <RemoteCounter counter={count} onIncrease={() => setCount(count + 1)} />
      </React.Suspense>
    </div>
  );
};

export default App;
