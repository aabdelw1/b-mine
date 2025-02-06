import React from "react";
import './App.css';
import ValentineApp from './ValentinesApp';
import AudioToggle from "./AudioToggle";

function App() {
  return (
    <div className="App">
      <AudioToggle /> 
      <header className="App-header">
        <ValentineApp/>
      </header>
    </div>
  );
}

export default App;
