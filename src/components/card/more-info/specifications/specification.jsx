import React from 'react';

import './specifications.scss';

const SPECIFICATON_DATA = {
  'Трансмиссия': 'Роботизированная',
  'Мощность двигателя, л.с.': '249',
  'Тип двигателя': 'Бензиновый',
  'Привод': 'Полный',
  'Объем двигателя, л': '2.4',
  'Макс. крутящий момент': '370/4500',
  'Количество цилиндров': '4',
};

function Specifications() {

  const items = Object.entries(SPECIFICATON_DATA).map(([key, value]) => 
    <div key={key}>
      <dt>{key}</dt>
      <dd>{value}</dd>
    </div>
  );

  return <dl className="specifications">{items}</dl>;
}

export default Specifications;