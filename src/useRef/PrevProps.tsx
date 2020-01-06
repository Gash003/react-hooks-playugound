import React from 'react';
import { useState, useRef, useEffect } from 'react';


export default function () {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>();
    
    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;
    
    return (
        <>
            <button onClick={() => setCount(count + 1)}>New Count</button>
            <h1>Now: {count}, before: {prevCount}</h1>
        </>
    );
}


// https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
function usePrevious(value: number) {

}