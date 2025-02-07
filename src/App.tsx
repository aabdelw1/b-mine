import React, { useEffect } from 'react';
import './styles/App.css';
import ValentineApp from './components/ValentinesApp';
import AudioToggle from './components/AudioToggle';
import logUserAction from './utils/logger';

const App: React.FC = () => {
  useEffect(() => {
    logUserAction('Page Refreshed');
  }, []);

  return (
    <div className="App">
      <AudioToggle />
      <header className="App-header">
        <ValentineApp />
      </header>
    </div>
  );
};

export default App;
