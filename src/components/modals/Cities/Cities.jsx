import React from 'react';
import './style.scss';

import { CloseButton } from '../../UI/CloseButton/CloseButton';
import { TitleH3PopUp } from '../../UI/TitleH3/TitleH3';
import { Input } from '../../UI/Input/Input';

import { citiesList } from '../../../citiesList.js';

import bgImg from './bg.svg';

export const Cities = ({ setStateOfPopUps }) => {
    const handleClose = () => {
        setStateOfPopUps({
            city: false,
            logIn: false,
            info: false,
        });
    };
    return (
        <div className="cities">
            <img src={bgImg} alt="" className="cities__bg" />
            <CloseButton handler={handleClose} />
            <TitleH3PopUp>Выберите город</TitleH3PopUp>
            <div className="cities__search">
                {/* <Input placeholder="Поиск города или населенного пункта" /> */}
            </div>
            <div className="cities__main-wrapper">
                <div className="cities__main-inner">
                    {citiesList.map((item) =>
                        item.cities.map((city, index) => (
                            <div className="cities__item" key={city.name}>
                                {city.name}
                                {index === 0 && (
                                    <div className="cities__letter">
                                        {item.letter}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
