import React from 'react';

import selfie from '../images/Other/me.jpg';
import mail_icon from '../images/Mail-Icon.svg';
import git_icon from '../images/Git-Icon-Black.svg';
import resume_icon from '../images/Resume-Icon.svg';

import '../css/Home.css'

function Home() {

  return (
    <>

      <div className="main-div">
        <div className="left-div">
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <img src={selfie} alt="selfie" className='selfie'/>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <p>Jonathan Borghese</p>

            <p>Check out my posts here!</p>

            <button>asdf</button>
            <button>asdf</button>
            <button>asdf</button>
            <button>asdf</button>
          </div>


        </div>


        <div className="right-div">
          <div className='about-me-div'>
            <h3 style={{textAlign:'center'}}>About Me</h3>
            <p>Welcome! I’m <b>Jonathan Borghese</b>, a dedicated and passionate computer engineer with a knack for solving complex problems and a love for everything AI. I have a solid foundation in software development and a wide range of abilities. I specialize in designing and implementing cutting-edge solutions that drive efficiency and performance.</p>
          </div>


          <div className='skills-div'>
            <span><h3 style={{textAlign:'center'}}>Skills</h3></span>

            <div style={{display: 'flex', justifyContent:'space-between', flexWrap: 'wrap'}}> { ["C/C++", "Python", "Java", "JavaScript", "SQL", "Git", "Linux", "Artificial Intelligence", "Machine Learning", "Reinforcement Learning", "Computer Vision", "NodeJS", "Angular", "React", "Pandas", "Scikit Learn", "Tensorflow", "OpenCV", "Keras"].map(name => (<div key={name} className='skill-div'><b>{name}</b></div>)) }
            </div>
          </div>


          <div className='connect-div'>

              <h3>Contacts</h3>

            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className='inline-info'>
                <img src={git_icon} alt='' style={{display: 'inline', width: '5ch', paddingTop: '1ch'}}/> <a href='https://github.com/JonathanBorghese'>GitHub</a>
              </div>

              <div className='inline-info'>
                <img src={mail_icon} alt='' style={{display: 'inline', width: '5ch', paddingTop: '1ch'}}/>JPBorghese@gmail.com
              </div>

              <div className='inline-info'>
                <img src={resume_icon} alt='' style={{display: 'inline', width: '5ch', paddingTop: '1ch'}}/>Resume
              </div>
            </div>
           
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;