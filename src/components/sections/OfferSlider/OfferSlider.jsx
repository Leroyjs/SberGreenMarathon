import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import './style.scss';

import { OfferSliderItem } from '../../common/OfferSliderItem/OfferSliderItem.jsx';

import slide_1 from './media/1.svg';
import slide_2 from './media/2.png';

const slides = [
    {
        img: slide_1,
        title: `Каждый шаг - это след. Какой след на планете оставишь ты?`,
    },
    {
        img: slide_2,
        title: `Сохраним природу для будущих поколений вместе`,
    },
];

export const OfferSlider = ({ buttons }) => {
    const _offerSlider = useRef(null);
    useEffect(() => {
        new Flickity(_offerSlider.current, {
            cellAlign: 'center',
            autoPlay: true,
            wrapAround: true,
            prevNextButtons: false,
        });
    }, []);
    return (
        <section className="offer-slider__wrapper">
            <div className="offer-slider" ref={_offerSlider}>
                {slides.map((item) => (
                    <OfferSliderItem
                        button={buttons}
                        key={item.img + item.title}
                        img={item.img}
                        title={item.title}
                    ></OfferSliderItem>
                ))}
            </div>
            <div className="offer-slider__circle-wrapper">
                <div className="offer-slider__circle"></div>
            </div>
        </section>
    );
};
