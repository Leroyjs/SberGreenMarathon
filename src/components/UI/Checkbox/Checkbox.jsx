import React, { useState } from 'react';
import './style.scss';

import okImg from './ok.svg';

export const Checkbox = ({
    children,
    initialValue = false,
    handler,
    error,
}) => {
    const [isChecked, setChecked] = useState(initialValue);

    const handleClick = () => {
        setChecked((prev) => !prev);
        handler && handler(!isChecked);
    };
    return (
        <label
            className={
                'checkbox__wrapper ' +
                (error ? 'checkbox__wrapper_error' : undefined)
            }
        >
            <input
                type="checkbox"
                className="checkbox__invisible"
                checked={isChecked}
                onChange={handleClick}
            />
            <div className="checkbox">
                {isChecked && (
                    <img src={okImg} alt="" className="checkbox__inner" />
                )}
            </div>
            <span className="checkbox__text">{children}</span>
        </label>
    );
};
