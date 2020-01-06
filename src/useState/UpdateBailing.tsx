import React, { useState } from 'react';

// https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update

export default function UpadteBailing() {
    const [count, setCount] = useState(0);
  
    console.log('Render updated: ', count);
    

    function updateCount(newVal: number) {
      setCount(newVal);
    }

    function resetCountCount() {
      setCount(0);
    }
  
    return (
      <div>
        <p>Currenrt count: {count}</p>
        <button onClick={() => updateCount(count + 1)}>
          Update Count
        </button>
        <button onClick={resetCountCount}>
          Reset
        </button>
      </div>
    );
  }