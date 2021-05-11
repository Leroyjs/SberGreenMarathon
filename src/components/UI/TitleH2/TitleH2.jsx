import React from 'react';
import './style.scss';

export const TitleH2 = ({ addClasses = [], children }) => {
    return <h2 className={addClasses.join(' ') + ' h2'}>{children}</h2>;
};
