const RATING_VERDICT = [
  {rating: 4, title: 'Советует'},
  {rating: 1, title: 'Не советует'},
  {rating: 0, title: 'Без оценки'},
];

export const getRatingVerdict = (value) => RATING_VERDICT
  .find(({rating}) => rating <= value)
  .title || '';

export const setNoBodyScroll = () => document.body.style.overflow = 'hidden';
export const setBodyScroll = () => document.body.style.overflow = 'scroll';
