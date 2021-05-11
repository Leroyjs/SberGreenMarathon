import React from 'react';
import './style.scss';

import calendarImg from './media/calendar.svg';
import clockImg from './media/clock.svg';

export const Date = ({ date, time }) => {
    return (
        <div className="date">
            <img src={calendarImg} alt="" className="date__icon" />
            <span className="date__date-text">{date}</span>
            <img src={clockImg} alt="" className="date__icon" />
            <span className="date__date-text">{time}</span>
        </div>
    );
};
