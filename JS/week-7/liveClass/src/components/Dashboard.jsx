export default function Dashboard({count, setCount}) {
  return <div>
    <button onClick={() => setCount(count+1)}>Increament</button>
    <button onClick={() =>setCount(count-1)}>Decreament</button>
  </div>;
}
