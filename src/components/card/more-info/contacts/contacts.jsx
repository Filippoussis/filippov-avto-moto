import React from 'react';
import OfficialInfo from './official-info/official-info';
import OfficialMap from './official-map/official-map';

import './contacts.scss';

function Contacts() {
  return (
    <div className="contacts">
      <OfficialInfo />
      <OfficialMap />
    </div>
  );
}

export default Contacts;
