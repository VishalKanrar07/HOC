import { useState } from "react";

const HOC = (OldComponent, incrementBy = 1) => {
  return function EnhancedComponent(props) {
    const [count, setcount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        incrementCount={() => setcount(count + incrementBy)}
      />
    );
  };
};

export default HOC;
