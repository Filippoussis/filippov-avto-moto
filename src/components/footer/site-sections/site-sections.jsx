import React from 'react';
import {Link} from 'react-router-dom';
import {FOOTER_SITE_SECTIONS} from '../../../const';

import './site-sections.scss';

function SiteSections() {

  const items = FOOTER_SITE_SECTIONS.map((item) =><li key={item}><Link to="#" className="site-sections__link">{item}</Link></li>);

  return (
    <ul className="site-sections">
      {items}
    </ul>
  );
}

export default SiteSections;
