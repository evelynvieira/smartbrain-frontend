import React from 'react';
import Tilt from 'react-tilt';
import brainLogo from './brain-logo.png';

import './Logo.css';

const Logo = () => (
  <div className="logo">
    <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner">
        <img src={brainLogo} alt='Logo' />
      </div>
    </Tilt>
  </div>
)

export default Logo;