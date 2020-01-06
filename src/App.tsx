import React from 'react';
import './App.css';
import { useAppContext } from './AppContext/AppProvider';


const App: React.FC = () => {
  const { appValue, appData } = useAppContext();

  return (
    <div className="App">
      <header className="App-header">
        App Value is: {appValue}
        <br/>
        App Value is: {JSON.stringify(appData)}
      </header>
    </div>
  );
};

export default App;
