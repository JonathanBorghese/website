import React from 'react';

import '../css/Component.css';
import pic from '../images/Other/me.jpg';

function Avatar() {
  return (
    <>
      <img src={pic} className="avatar-pic" alt="" style={{width:'100%'}}/>
    </>
  );
}

export default Avatar;