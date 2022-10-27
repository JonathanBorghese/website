import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main.js';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* NavbarHere */}
      <p> Navbar </p>
      <Main />
    </div>
  );
}

export default App;
