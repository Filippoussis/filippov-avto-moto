import React from 'react';
import PropTypes from 'prop-types';
import './star.scss';

import {STARS_VALUES} from '../../../../../../../const';

function Star({starValue, currentRating}) {

  const isChecked = starValue === currentRating;

  return (
    <>
      <input className="star__input visually-hidden" id={`star-${starValue}`} type="radio" name="rating" value={starValue} defaultChecked={isChecked} />
      <label className="star__label" htmlFor={`star-${starValue}`}>Rating {starValue}</label>
    </>
  );
}

Star.propTypes = {
  currentRating: PropTypes.string.isRequired,
  starValue: PropTypes.oneOf(STARS_VALUES).isRequired,
};

export default Star;
