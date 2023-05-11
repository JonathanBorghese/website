import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import Resume from './Resume.js';

function Main() {
  return (
    <Routes>
      <Route path='./' element={<Home />}></Route>
      <Route path='./resume' element={<Resume />}></Route>
    </Routes>
  );
}

export default Main;