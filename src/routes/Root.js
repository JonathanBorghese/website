import React from 'react';
import { Outlet } from 'react-router-dom';
//import Navbar from '../components/Navbar.js';
import '../css/Root.css';

function Root() {
  return (
    <div>
      {/*<Navbar />*/}
      <Outlet /> {/* where the child routes will be rendered */}
    </div>
  );
}

export default Root;
