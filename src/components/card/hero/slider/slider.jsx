import React, {useState} from 'react';

import './slider.scss';

import desktop1xBigSlide1 from './desktop1x-big-slide-1.webp';
import desktop2xBigSlide1 from './desktop2x-big-slide-1.webp';
import desktop1xBigSlide2 from './desktop1x-big-slide-2.webp';
import desktop2xBigSlide2 from './desktop2x-big-slide-2.webp';
import desktop1xBigSlide3 from './desktop1x-big-slide-3.webp';
import desktop2xBigSlide3 from './desktop2x-big-slide-3.webp';

import desktop1xSmallSlide1 from './desktop1x-small-slide-1.webp';
import desktop2xSmallSlide1 from './desktop2x-small-slide-1.webp';
import desktop1xSmallSlide2 from './desktop1x-small-slide-2.webp';
import desktop2xSmallSlide2 from './desktop2x-small-slide-2.webp';
import desktop1xSmallSlide3 from './desktop1x-small-slide-3.webp';
import desktop2xSmallSlide3 from './desktop2x-small-slide-3.webp';

const Slides = {
  1: {
    '1x': {
      big: desktop1xBigSlide1,
      small: desktop1xSmallSlide1,
    },
    '2x': {
      big: desktop2xBigSlide1,
      small: desktop2xSmallSlide1,
    }
  },
  2: {
    '1x':  {
      big: desktop1xBigSlide2,
      small: desktop1xSmallSlide2,
    },
    '2x': {
      big: desktop2xBigSlide2,
      small: desktop2xSmallSlide2,
    },
  },
  3: {
    '1x': {
      big: desktop1xBigSlide3,
      small: desktop1xSmallSlide3,
    },
    '2x': {
      big: desktop2xBigSlide3,
      small: desktop2xSmallSlide3,
    },
  }
};

function Slider() {

  const [activeSlide, setActiveSlide] = useState(1);

  const sliderMiniItems = Object.entries(Slides).map(([key, value]) => {
    return (
      <li key={key}>
        <img src={value['1x']['small']} srcSet={value['2x']['small']} alt="Изображение автомобиля" width="128" height="80"></img>
      </li>
    );
  });

  const isDisabledBack = activeSlide === 1;
  const isDisabledForward = activeSlide === Object.keys(Slides).length;

  const classModBack= !isDisabledBack ? 'slider__button--active' : '';
  const classModForward= !isDisabledForward ? 'slider__button--active' : '';

  const handleClickForward = () => setActiveSlide((state) => state + 1);
  const handleClickBack = () => setActiveSlide((state) => state - 1);

  return (
    <div className="slider">
      <div className="slider__image">
        <span className="slider__new-model">new model</span>
        <img src={Slides[activeSlide]['1x']['big']} srcSet={Slides[activeSlide]['2x']['big']} alt="Изображение автомобиля" width="600" height="375"></img>
      </div>
      <div className="slider__control">
        <button type="button" className={`slider__button ${classModBack}`} onClick={handleClickBack} aria-label="back" disabled={isDisabledBack}>
          <svg width="20" height="13"><use xlinkHref="#arrow-back"/></svg>
        </button>
        <ul className="slider__list">
          {sliderMiniItems}
        </ul>
        <button type="button" className={`slider__button ${classModForward}`} onClick={handleClickForward} aria-label="forward" disabled={isDisabledForward}>
          <svg width="20" height="13"><use xlinkHref="#arrow-forward"/></svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;