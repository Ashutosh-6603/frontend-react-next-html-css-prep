import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={() => setTheme((t) => !t)}>Toggle Theme</Button>
      <p>Count: {count}</p>
    </div>
  );
}
