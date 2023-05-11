import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

const linkStyle = {
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1.5em',
  fontFamily: 'Garamond'
}

function Navbar() {
  return (
    <div className="Navbar">
      <button>
        <Link to="/resume" style={linkStyle}>Resume</Link>
      </button>
      <button>
        <Link to="/" style={linkStyle}>Projects</Link>
      </button>
      <button>
        <Link to="/" style={linkStyle}>Home</Link>
      </button>
    </div>
  );
}

export default Navbar;