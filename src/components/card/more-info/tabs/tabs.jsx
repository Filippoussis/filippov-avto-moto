import React from 'react';

import {TabsName} from '../../../../const';

import './tabs.scss';

function Tabs({activeTab, onClickTab}) {

  const items = Object.entries(TabsName).map(([key, value]) => {
    const classModActive = value === activeTab ? 'tabs__item--active' : '';
    return (
      <button type="button" key={key} className={`tabs__item ${classModActive}`} onClick={() => onClickTab(value)}>
        {value}
      </button>
    );
  });

  return (
    <div className="tabs">
      {items}
    </div>
  );
}

export default Tabs;