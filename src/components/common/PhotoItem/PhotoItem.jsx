import React from 'react';
import './style.scss';

export const PhotoItem = ({ img }) => (
    <div className="photo-gallery-slider__item-wrapper">
        <div className="photo-gallery-slider__item">
            <img src={img} alt="" className="photo-gallery-slider__img"></img>
        </div>
    </div>
);
