import React, { Dispatch, SetStateAction, useState, useContext, useEffect } from 'react';


const AppContext = React.createContext<{
    appValue: number;
    appData: any;
    setAppValue?: Dispatch<SetStateAction<number>>,
    setAppData?: Dispatch<SetStateAction<any>>,
}>({
    appValue: 0,
    appData: {}
});

export function useAppContext() {
    return useContext(AppContext);
}

const AppProvider: React.FC = ({children}) => {
    const [appValue, setAppValue] = useState(42);
    const [appData, setAppData] = useState({});

    
    if (appData === null) {
        setAppValue(13);
    }

    useEffect(() => {
        function fetchData() {
            setTimeout(() => {
                setAppData({
                    foo: 'foo',
                    bar: 'bar',
                    baz: 'baz',
                });
            }, 2000);
        }

        fetchData();
    }, []);
        

    return (
        <AppContext.Provider value={{
            appValue,
            setAppValue,
            appData,
            setAppData
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;