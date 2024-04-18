import React from 'react';
import '../css/Resume.css';

import resume from '../JonathanBorghese_Resume.pdf';

function Resume() {
    return (
        <>
            <div>
                <center>
                    <embed className='resume-img' src={resume} type="application/pdf"></embed>
                </center>
            </div>
        </>
    );
}
//            <a href={resume} download>My Resume Download :)</a>
export default Resume;