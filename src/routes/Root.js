import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* where the child routes will be rendered */}
    </div>
  );
}

export default Root;
