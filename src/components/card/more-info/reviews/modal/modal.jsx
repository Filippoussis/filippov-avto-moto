import React, {useState} from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import Rating from './rating/rating';
import InvalidMessage from './invalid-message/invalid-message';

import './modal.scss';

function Modal({onActive, addComment}) {

  const [formData, setFormData] = useState({
    username: '',
    advantages: '',
    disadvantages: '',
    comment: '',
    rating: '',
  });

  const [invalidForm, setInvalidForm] = useState({
    invalidName: false,
    invalidComment: false,
  });

  const handleClick = () => onActive(false);
  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (formData.username.trim() === '' || formData.comment.trim() === '') {
      setInvalidForm({
        invalidName: !formData.username.trim(),
        invalidComment: !formData.comment.trim(),
      });
    } else {
      const data = {
        ...formData,
        name: formData.username,
        rating: Number(formData.rating),
        date: dayjs().format(),
      };

      localStorage.setItem('formData', JSON.stringify(data));

      addComment(data);
      onActive(false);
    }
  };

  const {username, advantages, disadvantages, comment, rating} = formData;
  const {invalidName, invalidComment} = invalidForm;

  return (
    <div className="modal" onClick={handleClick}>
      <form className="modal__form" onClick={(evt) => evt.stopPropagation()} onSubmit={handleSubmit} onChange={handleChange}>
        <h2>Оставить отзыв</h2>
        <button type="button" className="modal__close" onClick={handleClick} aria-label="Кнопка Закрыть"></button>
        <div className="modal__fields">
          <label htmlFor="username" className="modal__label modal__label--name">
            {invalidName && <InvalidMessage />}
            <input type="text" id="username" name="username" className={`modal__input ${invalidName && 'modal__input--invalid'}`} placeholder="Имя" autoFocus defaultValue={username} />
            <span>*</span>
          </label>
          <label htmlFor="advantages" className="modal__label modal__label--advantages">
            <input id="advantages" name="advantages" type="text" className="modal__input" placeholder="Достоинства" defaultValue={advantages} />
          </label>
          <label htmlFor="disadvantages" className="modal__label modal__label--disadvantages">
            <input id="disadvantages" name="disadvantages" type="text" className="modal__input" placeholder="Недостатки" defaultValue={disadvantages} />
          </label>
          <div className="modal__label modal__label--rating">
            <span>Оцените товар</span>
            <Rating currentRating={rating} />
          </div>
          <label htmlFor="comment" className="modal__label modal__label--comment">
            {invalidComment && <InvalidMessage />}
            <textarea id="comment" name="comment" className={`modal__input modal__input--comment ${invalidComment && 'modal__input--invalid'}`} placeholder="Комментарий" defaultValue={comment}></textarea>
            <span>*</span>
          </label>
        </div>
        <button type="submit" className="modal__submit">оставить отзыв</button>
      </form>
    </div>
  );
}

Modal.propTypes = {
  onActive: PropTypes.func,
  addComment: PropTypes.func,
};

export default Modal;
