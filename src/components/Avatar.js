import React from 'react';

import '../css/Component.css';
import pic from '../images/selfie.jpg';

function Avatar() {
  return (
    <div>
      <img src={pic} className="avatar-pic" alt=""/>
    </div>
  );
}

export default Avatar;