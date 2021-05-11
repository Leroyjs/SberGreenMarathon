import React from 'react';
import './style.scss';

let Burger = ({ isActive = false, onClick, addClasses = [] }) => {
    return (
        <div onClick={onClick} className={addClasses.join(' ') + ' burger'}>
            <div className="burger__inner">
                <div className="burger__line"></div>
                <div className="burger__line"></div>
                <div className="burger__line"></div>
            </div>
        </div>
    );
};

export { Burger };
