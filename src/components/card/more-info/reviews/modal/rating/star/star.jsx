import React from 'react';
import './star.scss';

function Star({starValue, currentRating}) {

  const isChecked = starValue === currentRating;

  return (
    <>
      <input className="star__input" id={`star-${starValue}`} type="radio" name="rating" value={starValue} defaultChecked={isChecked} />
      <label className="star__label" htmlFor={`star-${starValue}`}>Rating {starValue}</label>
    </>
  );
}

export default Star;