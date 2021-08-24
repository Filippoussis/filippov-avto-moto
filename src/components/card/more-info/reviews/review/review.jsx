import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {getRatingVerdict} from '../../../../../utils';

import StarsData from './stars-data/stars-data';

import './review.scss';

dayjs.extend(relativeTime);

function Review({item}) {

  const {name, advantages, disadvantages, comment, rating, date} = item;

  const commentDateFormated = dayjs(date).fromNow();

  return (
    <article className="review">
      <h3>{name}</h3>
      <dl>
        <div className="review__assessment review__assessment--advantages">
          <dt>Достоинства</dt>
          <dd>{advantages}</dd>
        </div>
        <div className="review__assessment review__assessment--disadvantages">
          <dt>Недостатки</dt>
          <dd>{disadvantages}</dd>
        </div>
        <dt>Комментарий</dt>
        <dd>{comment}</dd>
      </dl>
      <div className="review__rating">
        <StarsData rating={rating} />
        <span className="review__stars">★★★★★</span>
      </div>
      <span className="review__decision">{getRatingVerdict(rating)}</span>
      <div className="review__footer">
        <span className="review__date">{commentDateFormated}</span>
        <Link to="#" className="review__link">Ответить</Link>
      </div>
    </article>
  );
}

Review.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Review;
