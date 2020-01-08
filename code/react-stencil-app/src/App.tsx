import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
    <st-nav-bar/>
    <div className="App">
      <header className="App-header">
        <h1>React Stencil Demo</h1>
        <st-tile>
          <h1>Content</h1>
          <st-button label="Test"/>
        </st-tile>
        <st-tile>
          <h1>Content</h1>
          <st-button label="Test"/>
        </st-tile>
      </header>
    </div></div>
  );
}

export default App;
