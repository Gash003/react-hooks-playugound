import React, { useState, useMemo, useReducer } from 'react';

export default function MemoBasic() {
    const [a, setA] = useState('a');
    const [b, setB] = useState('b');

    // Look here!
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const heavyComputing = (_a: string, _b: string) => {
        console.log('CPU is burning');
        return `First is: ${_a}, Second: ${_b}`;
    };

    const heavyOutput = heavyComputing(a, b);

    
    const onButtonClick = () => {
        setA('A');
        setB('B');
        forceUpdate();
    };
    
    console.log('Render');
    
    return (
      <>
        Output: {heavyOutput}
        <button onClick={onButtonClick}>Make it BIG</button>
      </>
    );
  }