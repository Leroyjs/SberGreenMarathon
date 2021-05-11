import React from 'react';
import './style.scss';

export const TitleH1 = ({ addClasses = [], children }) => {
    return <h1 className={addClasses.join(' ') + ' h1'}>{children}</h1>;
};
