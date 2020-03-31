import React from 'react';
import './App.css';
import '../src/styles/App.scss';
import Tooltip from '../src/Tooltip';

function App() {
  return (
    <div className="App">
      <div className="headingDiv">
          Hover over or click on "info" icon: {" "}
      </div>
      <div>
        <Tooltip />
      </div>
    </div>
  );
}

export default App;
