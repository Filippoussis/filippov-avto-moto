import React from 'react';
import PropTypes from 'prop-types';

const STARS_COUNT = 5;

function StarsData({rating}) {

  const style = {
    position: 'absolute',
    width: `${rating*100/STARS_COUNT}%`,
    top: '0',
    left: '0',
    fontSize: '16px',
    letterSpacing: '0.34em',
    marginRight: '-0.34em',
    height: '100%',
    color: '#D12136',
    overflow: 'hidden',
  };

  return <span style={style}>★★★★★</span>;
}

StarsData.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarsData;
