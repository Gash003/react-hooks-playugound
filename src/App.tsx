import React from 'react';
import './App.css';
import AppContextConsumer from './useContext/AppContextConsumer';
import StaleProps from './useState/StaleProps';
import UpadteBailing from './useState/UpdateBailing';
import PrevProps from './useRef/PrevProps';
import RefTimer from './useRef/RefTimer';


const App: React.FC = () => {
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <UpadteBailing></UpadteBailing> */}
        {/* <StaleProps></StaleProps> */}
        {/* <AppContextConsumer></AppContextConsumer> */}
        {/* <RefTimer></RefTimer> */}
        {/* <PrevProps></PrevProps> */}
      </header>
    </div>
  );
};

export default App;
