import React from 'react';

import Main from './pages/Main.js';
import Navbar from './components/Navbar.js';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
