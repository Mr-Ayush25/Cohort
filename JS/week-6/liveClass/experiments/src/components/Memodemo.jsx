import { useEffect, useState } from "react";

const Memodemo = () => {
  const [n, setN] = useState("");
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    let sumvalu = 0;
    for (let i = 1; i <= n; i++) {
      sumvalu += i;
    }
    setSum(sumvalu);
  }, [n, sum]);
  return (
    <div>
      <inputk
        type="text"
        value={n}
        onChange={(e) => {
          setN(e.target.value);
        }}
      />
      <h2>sum is {sum}</h2>
      <button onClick={() => setCounter((p) => p + 1)}>{counter}</button>
    </div>
  );
};

export default Memodemo;
