import React from 'react';
import PropTypes from 'prop-types';
import './star.scss';

import {STARS_VALUES} from '../../../../../../../const';

function Star({starValue, currentRating}) {

  const isChecked = starValue === currentRating;

  return (
    <input
      type="radio"
      name="rating"
      className="star__input"
      id={`star-${starValue}`}
      value={starValue}
      defaultChecked={isChecked}
      aria-label={`Rating-${starValue}`}
    />
  );
}

Star.propTypes = {
  currentRating: PropTypes.string.isRequired,
  starValue: PropTypes.oneOf(STARS_VALUES).isRequired,
};

export default Star;
