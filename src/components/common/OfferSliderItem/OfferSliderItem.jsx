import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import { Button } from '../../UI/Button/Button.jsx';
import { TitleH2 } from '../../UI/TitleH2/TitleH2.jsx';

export const OfferSliderItem = ({ img, title, button }) => {
    return (
        <div className="offer-slider__item">
            <img src={img} alt="" className="offer-slider__item-bg"></img>
            <div className="column">
                <TitleH2 addClasses={['offer-slider__title']}>{title}</TitleH2>
                {button && (
                    <Link to="/about" addClasses={['offer-slider__button']}>
                        <Button> Узнать подробнее</Button>
                    </Link>
                )}
            </div>
        </div>
    );
};
