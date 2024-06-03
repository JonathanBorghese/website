import React from 'react';

import Avatar from '../components/Avatar.js'

import '../css/Home.css'

function Home() {

  return (
    <>
      <b>Under Construction :/</b>

      <div className="main-div">
        <div className="info-div">
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <Avatar />
          </div>

          name: Jonathan Borghese
          <br/>
          email: jpborghese@gmail.com
          <br/>


        </div>


        <div>
          <h3>About Me</h3>

          <h3>Skills</h3>
          <div className="skills-div">
            { ["C/C++", "Python", "Java", "JavaScript", "SQL", "Git", "Linux", "Artificial Intelligence", "Machine Learning", "Reinforcement Learning", "Computer Vision", "NodeJS", "Angular", "React", "Pandas", "Scikit Learn", "Tensorflow", "OpenCV", "Keras"].map(name => (<div key={name}><b>{name}</b></div>)) }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;