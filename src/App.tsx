import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        textAlign: 'center'
      }}>
        🎉dunce.party coming soon🎉
        <br/>
        have a chuck norris fact while you wait: <br /> <br />
        <span id = 'chuck'>chuck norris is so strong that he broke into your house to turn back on the wifi</span>
      </div>
    </div>
  );
}

export default App;
