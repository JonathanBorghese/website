import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p> HOME! </p>
      <div>
        <Link to="/page1">pg1</Link>
      </div>
    </>
  );
}

export default Home;