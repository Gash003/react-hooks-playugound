import React, { useState, useEffect, useLayoutEffect } from 'react';


export default function LayoutEffect() {
    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
      if (value === 0) {
          console.log('start');
          setValue(10 + Math.random() * 200);
      }
    }, [value]);
  
    console.log('render', value);
  
    return (
      <div onClick={() => setValue(0)}>
        value: {value}
      </div>
    );
}
