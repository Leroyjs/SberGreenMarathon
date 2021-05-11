import React from 'react';
import './style.scss';

export const TitleH4 = ({ addClasses = [], children }) => {
    return <h4 className={addClasses.join(' ') + ' h4'}>{children}</h4>;
};
