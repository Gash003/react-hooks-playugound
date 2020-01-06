import React, { useRef, useEffect } from 'react';

export default function RefTimer() {
    const intervalRef = useRef<any>();
  
    useEffect(() => {
      const id = setInterval(() => {
        console.log('Tik tak');
      }, 1000);

      intervalRef.current = id;
      
      return () => {
        clearInterval(intervalRef.current);
      };
    });

    function handleCancelClick() {
        console.log('Interval cleared');
        clearInterval(intervalRef.current);
      }
  
      return (
          <button onClick={handleCancelClick}>
            Clear Interval
          </button>
      );
  }