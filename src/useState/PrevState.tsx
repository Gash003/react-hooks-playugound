import React, { useState } from 'react';


export default function PrevState() {
  // Expensive computation
  const expensiveComputation = () => {
    console.log('Computing');
    return 0;
  };

  const [count, setCount] = useState(0);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
