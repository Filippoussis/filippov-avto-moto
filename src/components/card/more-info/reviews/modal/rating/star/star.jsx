import React from 'react';
import PropTypes from 'prop-types';

import {STARS_VALUES} from '../../../../../../../const';

function Star({starValue, currentRating}) {

  const isChecked = starValue === currentRating;

  return (
    <>
      <label aria-label={`rating-${starValue}`} className="rating__label" htmlFor={`star-${starValue}`}>
        <span className="rating__icon rating__icon--star">★</span>
      </label>
      <input className="rating__input visually-hidden" name="rating" id={`star-${starValue}`} value={starValue} type="radio" defaultChecked={isChecked} />
    </>
  );
}

Star.propTypes = {
  starValue: PropTypes.oneOf(STARS_VALUES).isRequired,
  currentRating: PropTypes.string.isRequired,
};

export default Star;
