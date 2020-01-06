import React from 'react';
import { useAppContext } from './AppProvider';
import AppValue  from './AppValue';

export default function AppContextConsumer() {
    const { appValue, appData } = useAppContext();

    return (
        <>
            <AppValue appValue={appValue}></AppValue>
            <br/>
            App Value is: {JSON.stringify(appData)}
        </>
    );
}
