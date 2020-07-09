import React from 'react';
import './App.css';
import {ResetStyle, GlobalStyle} from './components/globalStyle';

import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <div className="conatiner">
        <Calculator />
      </div>

    </div>
  );
}

export default App;
