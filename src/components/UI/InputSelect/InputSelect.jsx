import React, { useState } from 'react';
import './style.scss';

import { Desc } from '../Desc/Desc';

import searchImg from './search.svg';

export const InputSelect = ({
    title,
    placeholder,
    handler,
    initialValue = '',
    addClasses = [],
    desc,
    externalValue,
    list,
    error,
}) => {
    const [value, setValue] = useState(initialValue);
    const [activeItem, setActiveItem] = useState(initialValue);
    const [isActive, setActive] = useState(false);

    const handleChange = (value) => {
        setValue(value);
    };
    const handleBlur = () => {
        setTimeout(() => {
            setActive(false);
            setValue('');
        }, 0);
    };
    const handleFocus = () => {
        setActive(true);
        setValue('');
        setActiveItem(false);
        handler && handler(false);
    };
    const handleClick = (item) => {
        setActiveItem(item);
        handler && handler(item);
    };
    const activeList = list.filter((item) => {
        if (item.toUpperCase().indexOf(value.toUpperCase()) + 1) {
            return item;
        }
    });

    return (
        <div
            className={
                addClasses.join(' ') +
                ' input-select__wrapper ' +
                (error ? ' input-select__wrapper_error ' : undefined)
            }
        >
            <h4 className="input-select__title">{title}</h4>
            <div
                className={
                    'input-select ' +
                    (isActive ? ' input-select_focus ' : undefined)
                }
            >
                <div className="input-select__input-wrapper">
                    <img
                        src={searchImg}
                        alt=""
                        className="input-select__input-img"
                    />
                    <input
                        id={title}
                        onFocus={() => handleFocus()}
                        onBlur={() => handleBlur()}
                        type="text"
                        className="input-select__input"
                        value={activeItem || externalValue || value}
                        placeholder={placeholder}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>
            {isActive && activeList.length !== 0 && (
                <div htmlFor={title} className="input-select__list-wrapper">
                    <ul className="input-select__list">
                        {activeList.map((item) => (
                            <li
                                key={item}
                                onMouseDown={() => handleClick(item)}
                                className="input-select__li"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {error && <Desc addClasses={['input-select__error']}>{error}</Desc>}
            {desc && <Desc addClasses={['input-select__desc']}>{desc}</Desc>}
        </div>
    );
};
