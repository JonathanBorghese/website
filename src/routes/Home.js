import React from 'react';

import '../css/Home.css'

function Home() {

  return (
    <>
      <div className="main-div">
      <h1>Home Page</h1>

        <h3>About Me</h3>

        <h3>Skills</h3>
        <div className="skills-div">
          { ["C/C++", "Python", "Java", "JavaScript", "SQL", "Git", "Linux", "Artificial Intelligence", "Machine Learning", "Reinforcement Learning", "Computer Vision", "NodeJS", "Angular", "React", "Pandas", "Scikit Learn", "Tensorflow", "OpenCV", "Keras"].map(name => (<div key={name}>{name}</div>)) }
        </div>
      </div>
    </>
  );
}

export default Home;