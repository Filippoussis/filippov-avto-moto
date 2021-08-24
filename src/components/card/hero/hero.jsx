import React from 'react';
import Slider from './slider/slider';
import Description from './description/description';

import './hero.scss';

function Hero() {
  return (
    <div className="hero">
      <Slider />
      <Description />
    </div>
  );
}

export default Hero;
