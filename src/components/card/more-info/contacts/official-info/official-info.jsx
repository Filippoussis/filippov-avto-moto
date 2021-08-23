import React from 'react';

import './official-info.scss';

function OfficialInfo() {
  return (
    <dl className="official-info">
      <dt>Адрес</dt>
      <dd>Санкт-Петербург,<br/>набережная реки Карповки, дом 5</dd>
      <dt>Режим работы</dt>
      <dd>Ежедневно, с 10:00 до 21:00</dd>
      <dt>Телефон</dt>
      <dd>8 (800) 333-55-99</dd>
      <dt>E-mail</dt>
      <dd>info@avto-moto.ru</dd>
    </dl>
  );
}

export default OfficialInfo;