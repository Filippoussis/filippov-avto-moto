import React from 'react';
import PropTypes from 'prop-types';
import Star from './star/star';

import {STARS_VALUES} from '../../../../../../const';
import './rating.scss';

function Rating({currentRating}) {

  const ratingStars = STARS_VALUES.map((starValue) => (
    <Star key={starValue} starValue={starValue} currentRating={currentRating} />
  ));

  return (
    <div className="rating">
      {ratingStars}
    </div>
  );
}

Rating.propTypes = {
  currentRating: PropTypes.string.isRequired,
};

export default Rating;
