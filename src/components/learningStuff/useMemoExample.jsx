import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
}

export default function UseMemoCounter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(5);

  const expensiveResult = useMemo(
    () => ExpensiveCalculation({ num: value }),
    [value]
  );

  return (
    <div>
      <h2>Expensive Result: {expensiveResult}</h2>
      <h2>Expensive Result: {count}</h2>
      <button onClick={() => setValue(value + 1)}>Change Value</button>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}
