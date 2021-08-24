import React from 'react';
import {Link} from 'react-router-dom';

import './description.scss';

import engine from './engine.svg';
import transmission from './transmission.svg';
import power from './power.svg';
import volume from './volume.svg';

const specData = {
  title: 'Марпех 11',
  parameters: {
    engine: 'бензин',
    transmission: 'механика',
    power: '100 л.с.',
    volume: '1.4 л',
  },
  price: 2300000,
  marketingPrice: 2400000,
};

const SpecIcon = {engine, transmission, power, volume};

function Description() {

  const {title, parameters, price, marketingPrice} = specData;

  const specItems = Object.entries(parameters).map(([key, value]) => (
    <li key={key} className="description__item">
      <img src={SpecIcon[key]} alt={key} width="40" height="40" />
      <span className="description__value">{value}</span>
    </li>
  ));

  return (
    <article className="description">
      <h2>{title}</h2>
      <ul className="description__list">{specItems}</ul>
      <p className="description__price">
        <span className="description__current-price">{price.toLocaleString()} ₽</span>
        <span className="description__marketing-price">{marketingPrice.toLocaleString()} ₽</span>
      </p>
      <Link className="description__put-bid" to="#">оставить заявку</Link>
      <Link className="description__credit" to="#">в кредит от 11 000 ₽</Link>
    </article>
  );
}

export default Description;
