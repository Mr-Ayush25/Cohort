import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export default function Assignment1() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(1);
  // Your solution starts here
  function expensiveFactorial(n) {
    if (n == 0) return 1;
    console.log("rerendere");
    return n * expensiveFactorial(n - 1);
  }
  const expensiveValue = useMemo(() => expensiveFactorial(input), [input]);
  // const expensiveValue = expensiveFactorial(input);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
      <button onClick={() => setCount((p) => p + 1)}>{count}</button>
    </div>
  );
}
