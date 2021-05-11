import React from 'react';
import './style.scss';

export const Desc = ({ addClasses = [], children }) => {
    return <p className={addClasses.join(' ') + ' desc'}>{children}</p>;
};
