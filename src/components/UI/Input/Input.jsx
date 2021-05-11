import React, { useState } from 'react';
import './style.scss';

import { Desc } from '../../UI/Desc/Desc';

export const Input = ({
    numberMax,
    title,
    placeholder,
    handler,
    initialValue = '',
    addClasses = [],
    desc,
    externalValue,
    error,
    type = false,
    isDisabled = false,
}) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        handler ? handler(e.target.value) : setValue(e.target.value);
    };
    return (
        <div
            className={
                addClasses.join(' ') +
                ' input__wrapper ' +
                (error ? ' input__wrapper_error ' : undefined) +
                (isDisabled ? ' input__wrapper_disabled ' : undefined)
            }
        >
            <h4 className="input__title">{title}</h4>
            <input
                disabled={isDisabled}
                max={numberMax}
                type={type ? type : 'text'}
                className="input"
                value={externalValue || value}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
            {error && <Desc addClasses={['input__error']}>{error}</Desc>}
            {desc && <Desc addClasses={['input__desc']}>{desc}</Desc>}
        </div>
    );
};
