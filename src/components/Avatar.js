import React from 'react';

import '../css/Avatar.css';
import pic from '../images/selfie.jpg';

function Avatar() {
  return (
    <div>
      <img src={pic} className="pic" />
    </div>
  );
}

export default Avatar;