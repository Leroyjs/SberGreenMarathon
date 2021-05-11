import React from 'react';
import './style.scss';

import { Date } from '../../common/Date/Date';

export const TabItem = ({ children, date, time, onClick, isActive }) => {
    return (
        <div className="tab-item__wrapper">
            <div
                onClick={onClick}
                className={
                    'tab-item ' + (isActive ? 'tab-item_active' : undefined)
                }
            >
                {date && time && <Date date={date} time={time} />}
                <div className="tab-item__content">{children}</div>
            </div>
        </div>
    );
};
