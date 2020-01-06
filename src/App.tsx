import React from 'react';
import './App.css';
import AppContextConsumer from './useContext/AppContextConsumer';
import { useAppContext } from './useContext/AppProvider';
import StaleProps from './useState/StaleProps';
import PrevState from './useState/PrevState';
import UpadteBailing from './useState/UpdateBailing';
import PrevProps from './useRef/PrevProps';
import RefTimer from './useRef/RefTimer';
import DomRef from './useRef/DomRef';
import BasicEffect from './useEffect/BasicEffect';

const App: React.FC = () => {
  const { setAppData } = useAppContext();

  return (
    <div className="App">
      <button onClick={() => setAppData && setAppData({})}>Force render</button>
      <header className="App-header">
        {/* <UpadteBailing></UpadteBailing> */}
        {/* <PrevState></PrevState> */}
        {/* <StaleProps></StaleProps> */}
        {/* <BasicEffect></BasicEffect> */}
        {/* <AppContextConsumer></AppContextConsumer> */}
        {/* <DomRef></DomRef> */}
        {/* <RefTimer></RefTimer> */}
        {/* <PrevProps></PrevProps> */}
      </header>
    </div>
  );
};

export default App;
