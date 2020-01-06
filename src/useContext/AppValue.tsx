import React from 'react';

export default function AppValue ({appValue}: {appValue: number}) {
    console.log('AppValue has rendered');
    
    return (
        <div>App Value is: {appValue}</div> 
    );
};
