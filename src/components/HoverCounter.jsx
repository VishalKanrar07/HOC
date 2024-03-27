import HOC from "./HOC";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onMouseOver={incrementCount}>Hover me</button>
    </div>
  );
};

export default HOC(HoverCounter, 5);
