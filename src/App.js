import React from 'react';
import './styles/App.css';
import ValentineApp from './components/ValentinesApp';
import AudioToggle from './components/AudioToggle';

function App() {
  return (
    <div className="App">
      <AudioToggle />
      <header className="App-header">
        <ValentineApp />
      </header>
    </div>
  );
}

export default App;
