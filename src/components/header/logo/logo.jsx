import React from 'react';

import './logo.scss';

function Logo() {
  return (
    <div className="logo">
      <svg width="55" height="55">
        <use xlinkHref="#logo"/>
      </svg>
      <p className="logo__description">
        <span className="logo__first">AVTO</span>
        <span className="logo__secondary">MOTO</span>
      </p>
    </div>
  );
}

export default Logo;