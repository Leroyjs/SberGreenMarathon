import React from 'react';
import './style.scss';

export const MinorButton = ({ addClasses = [], children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={addClasses.join(' ') + ' minor-button'}
        >
            {children}
        </button>
    );
};
