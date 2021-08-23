import React from 'react';
import Hero from './hero/hero';
import MoreInfo from './more-info/more-info';

import './card.scss';

function Card() {
  return (
    <section className="card">
      <Hero />
      <MoreInfo />
    </section>
  );
}

export default Card;