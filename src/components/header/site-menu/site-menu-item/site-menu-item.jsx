import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function SiteMenuItem({item, setActiveItem, activeItem}) {

  const handleClick = (evt) => {
    evt.preventDefault();
    setActiveItem(evt.target.dataset.value);
  };

  const classMod = item === activeItem ? 'site-menu__link--active' : '';

  return <Link to="#" className={`site-menu__link ${classMod}`} data-value={item} onClick={handleClick}>{item}</Link>;
}

SiteMenuItem.propTypes = {
  item: PropTypes.string,
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
};

export default SiteMenuItem;
