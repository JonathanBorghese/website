import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import Pg1 from './pg1.js';

function Main() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/page1' element={<Pg1 />}></Route>
    </Routes>
  );
}

export default Main;