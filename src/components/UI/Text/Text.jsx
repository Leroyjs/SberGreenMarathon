import React from 'react';
import './style.scss';

export const Text = ({ addClasses = [], children }) => {
    return <p className={addClasses.join(' ') + ' text'}>{children}</p>;
};
