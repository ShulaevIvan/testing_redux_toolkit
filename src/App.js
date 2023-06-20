import React from 'react';
import './App.css';
import { Counter } from './components/Counter';
import {TestGetData} from './components/TestGetData';

function App() {
  return (
   <React.Fragment>
      <Counter></Counter>
      <TestGetData></TestGetData>
   </React.Fragment>
  );
}

export default App;
