import React, {useState} from 'react';

import './slider.scss';

import desktop1xBigSlide1Webp from './desktop1x-big-slide-1.webp';
import desktop2xBigSlide1Webp from './desktop2x-big-slide-1.webp';
import desktop1xBigSlide2Webp from './desktop1x-big-slide-2.webp';
import desktop2xBigSlide2Webp from './desktop2x-big-slide-2.webp';
import desktop1xBigSlide3Webp from './desktop1x-big-slide-3.webp';
import desktop2xBigSlide3Webp from './desktop2x-big-slide-3.webp';

import desktop1xBigSlide1Jpg from './desktop1x-big-slide-1.jpg';
import desktop2xBigSlide1Jpg from './desktop2x-big-slide-1.jpg';
import desktop1xBigSlide2Jpg from './desktop1x-big-slide-2.jpg';
import desktop2xBigSlide2Jpg from './desktop2x-big-slide-2.jpg';
import desktop1xBigSlide3Jpg from './desktop1x-big-slide-3.jpg';
import desktop2xBigSlide3Jpg from './desktop2x-big-slide-3.jpg';

import desktop1xSmallSlide1Webp from './desktop1x-small-slide-1.webp';
import desktop2xSmallSlide1Webp from './desktop2x-small-slide-1.webp';
import desktop1xSmallSlide2Webp from './desktop1x-small-slide-2.webp';
import desktop2xSmallSlide2Webp from './desktop2x-small-slide-2.webp';
import desktop1xSmallSlide3Webp from './desktop1x-small-slide-3.webp';
import desktop2xSmallSlide3Webp from './desktop2x-small-slide-3.webp';

import desktop1xSmallSlide1Jpg from './desktop1x-small-slide-1.jpg';
import desktop2xSmallSlide1Jpg from './desktop2x-small-slide-1.jpg';
import desktop1xSmallSlide2Jpg from './desktop1x-small-slide-2.jpg';
import desktop2xSmallSlide2Jpg from './desktop2x-small-slide-2.jpg';
import desktop1xSmallSlide3Jpg from './desktop1x-small-slide-3.jpg';
import desktop2xSmallSlide3Jpg from './desktop2x-small-slide-3.jpg';

const Slides = {
  1: {
    '1x': {
      webp: {
        big: desktop1xBigSlide1Webp,
        small: desktop1xSmallSlide1Webp,
      },
      jpg: {
        big: desktop1xBigSlide1Jpg,
        small: desktop1xSmallSlide1Jpg,
      },
    },
    '2x': {
      webp: {
        big: desktop2xBigSlide1Webp,
        small: desktop2xSmallSlide1Webp,
      },
      jpg: {
        big: desktop2xBigSlide1Jpg,
        small: desktop2xSmallSlide1Jpg,
      },
    },
  },
  2: {
    '1x': {
      webp: {
        big: desktop1xBigSlide2Webp,
        small: desktop1xSmallSlide2Webp,
      },
      jpg: {
        big: desktop1xBigSlide2Jpg,
        small: desktop1xSmallSlide2Jpg,
      },
    },
    '2x': {
      webp: {
        big: desktop2xBigSlide2Webp,
        small: desktop2xSmallSlide2Webp,
      },
      jpg: {
        big: desktop2xBigSlide2Jpg,
        small: desktop2xSmallSlide2Jpg,
      },
    },
  },
  3: {
    '1x': {
      webp: {
        big: desktop1xBigSlide3Webp,
        small: desktop1xSmallSlide3Webp,
      },
      jpg: {
        big: desktop1xBigSlide3Jpg,
        small: desktop1xSmallSlide3Jpg,
      },
    },
    '2x': {
      webp: {
        big: desktop2xBigSlide3Webp,
        small: desktop2xSmallSlide3Webp,
      },
      jpg: {
        big: desktop2xBigSlide3Jpg,
        small: desktop2xSmallSlide3Jpg,
      },
    },
  },
};

function Slider() {

  const [activeSlide, setActiveSlide] = useState(1);

  const sliderMiniItems = Object.entries(Slides).map(([key, value]) => (
    <li key={key}>
      <picture>
        <source type="image/webp" srcSet={`${value['1x']['webp']['small']} 1x, ${value['2x']['webp']['small']} 2x`} />
        <img src={value['1x']['jpg']['small']} srcSet={value['2x']['jpg']['small']} alt="Изображение автомобиля" width="128" height="80"></img>
      </picture>
    </li>
  ));

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
        <picture>
          <source type="image/webp" srcSet={`${Slides[activeSlide]['1x']['webp']['big']} 1x, ${Slides[activeSlide]['2x']['webp']['big']} 2x`} />
          <img src={Slides[activeSlide]['1x']['jpg']['big']} srcSet={Slides[activeSlide]['2x']['jpg']['big']} alt="Изображение автомобиля" width="600" height="375"></img>
        </picture>
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
