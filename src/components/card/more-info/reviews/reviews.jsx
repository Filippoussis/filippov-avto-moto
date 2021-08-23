import React, {useState, useEffect, useCallback} from 'react';
import Review from './review/review';
import Modal from './modal/modal';

import './reviews.scss';

let id = 10;

const mockDataReviews = [
    {
      id: 1,
      name: 'Борис Иванов',
      advantages: 'мощность, внешний вид',
      disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
      comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
      rating: 4,
      date: '2021-05-08T14:13:56.569Z',
    },
    {
      id: 2,
      name: 'Марсель Исмагилов',
      advantages: 'Cтиль, комфорт, управляемость',
      disadvantages: 'Дорогой ремонт и обслуживание',
      comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
      rating: 2,
      date: '2021-08-20T14:13:56.569Z',
    },
  ];

function Reviews() {

  const [modalActive, setModalActive] = useState(false);
  const [data, updateData] = useState(mockDataReviews);

  const addComment = (comment) => {
    const newComment = {
      id: id++,
      ...comment,
    }
  
    updateData((state) => {
        return [
        ...state,
        newComment,
      ];
    });
  }

  const handleKeyDownEsc = useCallback((event) => {
    if(event.keyCode === 27) {
      setModalActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [handleKeyDownEsc]);

  const handleClickButton = () => setModalActive(true);

  const items = data.map((item) => <li key={item.id}><Review item={item} /></li>);

  return (
    <div className="reviews">
      <button type="button" className="reviews__button" onClick={handleClickButton}>оставить отзыв</button>
      <ul className="reviews__list">{items}</ul>
      {modalActive && <Modal onActive={setModalActive} addComment={addComment} />}
    </div>
  );
}

export default Reviews;