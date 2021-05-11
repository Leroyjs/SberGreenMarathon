import React from 'react';
import './style.scss';

export const Button = ({ addClasses = [], children, onClick }) => {
    return (
        <button onClick={onClick} className={addClasses.join(' ') + ' button'}>
            {children}
        </button>
    );
};
