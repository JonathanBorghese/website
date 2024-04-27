import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Component.css';

const linkStyle = {
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1.5em',
  fontFamily: 'Garamond'
}

function Navbar() {
  return (
    <div className="Navbar">
      <button className="nav-button">
        <Link to='resume' style={linkStyle}>Resume</Link>
      </button>
      {
      <button className="nav-button">
        <Link to='blog' style={linkStyle}>Blog</Link>
      </button>
      }
      <button className="nav-button">
        <Link to='' style={linkStyle}>Home</Link>
      </button>
    </div>
  );
}

export default Navbar;