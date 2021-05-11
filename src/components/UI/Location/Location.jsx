import React from 'react';
import './style.scss';

import location from './location.svg';

let Location = ({ isActive = false, onClick, addClasses = [] }) => {
    return (
        <div onClick={onClick} className={addClasses.join(' ') + ' location'}>
            <img src={location} alt="" className="location__img"></img>
            <span className="location__text">Екатеринбург</span>
        </div>
    );
};

export { Location };
