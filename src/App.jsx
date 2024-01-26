import { useEffect, useMemo, useState, useLayoutEffect } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    console.log(1);
    return 0;
  });

  const double = useMemo(() => {
    console.log(2);
    return count * 2;
  }, [count]);

  const handleClick = () => setCount((c) => c + 1);

  useEffect(() => {
    console.log(4);
    return () => {
      console.log(6);
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log(3);

    return () => {
      console.log(5);
    };
  }, [count]);

  return (
    <div>
      <p>
        {count}---{double}
      </p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
