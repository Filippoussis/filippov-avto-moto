import React from 'react';
import PropTypes from 'prop-types';

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

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onClickTab: PropTypes.func.isRequired,
};


export default Tabs;
