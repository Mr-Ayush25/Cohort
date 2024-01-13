import { useState, useCallback, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export default function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => setCount((p) => p + 1), []);
  const handleDecrement = useCallback(() => setCount((p) => p - 1), []);

  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    {console.log("helo")}
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
/*
import { useCallback } from "react";

const dataSource = [
  {
    id: 1,
    model: "Honda",
    color: "red",
  },
  {
    id: 2,
    model: "Mazda",
    color: "yellow",
  },
  {
    id: 3,
    model: "Toyota",
    color: "green",
  },
];

const Car = ({ model, color, set, onCarClick }) => {
  const onClick = () => onCarClick(model, color);
  set.add(onCarClick);
  console.log(set.size);
  return (
    <div onClick={onClick}>
      Model: {model} Color: {color}
    </div>
  );
};

const CarsCallback = ({ cars, set }) => {
  const onCarClick = (model, color) => {
    console.log(model, color);
  };
  console.log("CarsCallback");
  return (
    <>
      {cars.map((car) => {
        return <Car key={car.id} set={set} {...car} onCarClick={onCarClick} />;
      })}
    </>
  );
};

const CarsUseCallback = ({ cars, set }) => {
  const onCarClick = useCallback((model, color) => {
    console.log(model, color);
  }, []);
  console.log("CarsUseCallback");
  return (
    <>
      {cars.map((car) => {
        return <Car key={car.id} {...car} set={set} onCarClick={onCarClick} />;
      })}
    </>
  );
};

function Assignment1() {
  return (
    <>
      <CarsCallback cars={dataSource} set={new Set()} />
      <CarsUseCallback cars={dataSource} set={new Set()} />
    </>
  );
}
export default Assignment1;
*/
