import React from 'react';
import './style.scss';

export const TitleH3 = ({ addClasses = [], children }) => {
    return <h3 className={addClasses.join(' ') + ' h3'}>{children}</h3>;
};
export const TitleH3PopUp = ({ addClasses = [], children }) => {
    return <h3 className={addClasses.join(' ') + ' h3_pop-up'}>{children}</h3>;
};
