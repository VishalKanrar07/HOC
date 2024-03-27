import HOC from "./HOC";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default HOC(ClickCounter, 10);
