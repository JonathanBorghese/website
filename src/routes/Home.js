import React from 'react';
import { Link } from 'react-router-dom';

import BlogButton from '../components/BlogButton.js'
import EoFPadding from '../components/EoFPadding.js'
import selfie from '../images/Other/me.jpg';

import '../css/Home.css'

function Home() {

  return (
    <>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'Roboto-Black-Italic', fontSize: '6ch'}}>
        <h1 style={{textAlign:'center'}}>Jonathan Borghese</h1>
      </div>

      <div className="main-div">
        <div className="left-div">
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <img src={selfie} alt="selfie" className='selfie' />
          </div>

          <h1>Hobbies</h1>
          <ul>
            <li><b>Soccer: </b>Lifelong soccer player</li>
            <li><b>Piano: </b>I'm a self taught pianist</li>
            <li><b>Video Games: </b>Gamin with the boys is always a good time</li>
          </ul>
        </div>


        <div className="right-div">
          
          <h1>About Me</h1>
          <p>Welcome! I’m <b>Jonathan Borghese</b>, a dedicated and passionate computer engineer skilled with solving complex problems and a love for everything AI. I have a solid foundation in software development and a wide range of abilities.</p>

          <h1>Background</h1>
          <p>I hold a degree in <b>Computer Engineering</b> and a minor in <b>Computer Science</b> from Virginia Tech. I am a lifelong programming hobbyist with a passion for making things through code. Over the years, I've worked on variety of projects such as web development, IoT integration, 3D game engine optimizations.</p>

          <h1>Skills</h1>

          <ul>
            <li><b>Languages: </b> C/C++, Java, Javascript, Python, SQL</li>
            <li><b>Web Dev: </b> TypeScript, HTML, CSS, AngularJS, React</li>
            <li><b>AI: </b>LangChain, Scikit Learn, TensorFlow, OpenCV, Keras</li>
            <li><b>Misc: </b>MQTT, Git, MonogDB, VirtualBox, Linux Kernel Programming</li>
          </ul>

          <h1>Projects</h1>

          <ul>
            <li><b>3D Voxel Engine - </b>Custom Built and optimized voxel terrain engine with the ability to efficiently remove terrain and optimized for performance</li>
            <li><b>Discord Bot - </b>A completely personalized discord bot created using the python discord API</li>
            <li><b>Ascii Tetris - </b>Tetris made only from the output of the command prompt</li>
            <li><b>Valve Hammer Mapping - </b>Maps created using valve hammer editor</li>
            <li><b>My Website - </b>This website :) The goal is to better document my projects and be able to share them</li>
          </ul>

        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center', textAlign: 'center', flexDirection:'column'}}>
        <h1>Get in Touch!</h1>
        
        <div style={{display:'flex', justifyContent:'center',}}>
          <h2>JPBorghese@gmail.com </h2>
          <a href="https://github.com/JonathanBorghese?tab=repositories" style={{paddingLeft:'20px'}}><h2>GitHub</h2></a>
          <Link to='resume' style={{paddingLeft:'20px'}}><h2>Resume</h2></Link>
          <a href="https://www.linkedin.com/in/jonathan-borghese-2291981b7/" style={{paddingLeft:'20px'}}><h2>LinkedIn</h2></a>
        </div>

      </div>

      <h1 style={{textAlign:'center'}}>Check out my Posts!</h1>

      <div style={{display:'flex', justifyContent:'center'}}>
        <BlogButton title='Intro to Single Layer Perceptrons' to='SLP_blog'/>
        <BlogButton title='My Voxel Engine' to='Voxel_blog' />
      </div>

      <EoFPadding length='10' />
    </>
  );
}

export default Home;